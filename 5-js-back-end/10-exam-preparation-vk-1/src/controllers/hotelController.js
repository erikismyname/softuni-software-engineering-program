const router = require('express').Router();

const { isUser } = require('../middlewares/guardMiddlewares.js');

router.get('/create', isUser(), (req, res) => {

    res.render('hotel/create', { title: 'Create' });

});

router.post('/create', isUser(), async (req, res) => {

    const hotelData = {
        name: req.body.name,
        city: req.body.city,
        imageUrl: req.body.imageUrl,
        rooms: req.body.rooms,
        bookedBy: [],
        owner: req.user._id,
    };

    try {

        await req.storage.createHotel(hotelData);

        res.redirect('/');

    } catch (err) {

        let errors;

        if (err.errors) {

            errors = Object.values(err.errors).map(e => e.properties.message);

        } else {

            errors = [err.message];

        }

        const ctx = {
            title: 'Create',
            errors,
            hotelData,
        };

        res.render('hotel/create', ctx)

    }

});

router.get('/details/:hotelId', isUser(), async (req, res) => {

    const hotelId = req.params.hotelId;

    try {

        const hotel = await req.storage.getHotelById(hotelId);

        hotel.isOwner = req.user._id == hotel.owner;

        hotel.isBooked = hotel.bookedBy.find(x => x == req.user._id);

        const ctx = {
            title: 'Details',
            hotel,
        };

        res.render('hotel/details', ctx);

    } catch (err) {

        console.log(err.message);

        res.redirect('/404');

    }

});

router.get('/edit/:hotelId', isUser(), async (req, res) => {

    const hotelId = req.params.hotelId;

    try {

        const hotel = await req.storage.getHotelById(hotelId);

        if (hotel.owner != req.user._id) {

            throw new Error('Only hotel creator can edit it!');

        }

        const ctx = {
            title: 'Edit',
            hotel,
        };

        res.render('hotel/edit', ctx);

    } catch (err) {

        console.log(err);

        res.redirect('/');

    }

});

router.post('/edit/:hotelId', isUser(), async (req, res) => {

    const hotelId = req.params.hotelId;

    const hotelData = {
        name: req.body.name,
        city: req.body.city,
        imageUrl: req.body.imageUrl,
        rooms: req.body.rooms,
    };

    try {

        await req.storage.editHotel(hotelId, hotelData);

        res.redirect('/hotels/details/' + hotelId);

    } catch (err) {

        let errors;

        if (err.errors) {

            errors = Object.values(err.errors).map(e => e.properties.message);

        } else {

            errors = [err.message];

        }

        const ctx = {
            title: 'Edit',
            errors,
            hotel: {
                _id: hotelId,
                name: req.body.name,
                city: req.body.city,
                imageUrl: req.body.imageUrl,
                rooms: req.body.rooms,
            },
        };

        res.render('hotel/edit', ctx)

    }

});

router.get('/delete/:hotelId', isUser(), async (req, res) => {

    const hotelId = req.params.hotelId;

    try {

        const hotel = await req.storage.getHotelById(hotelId);

        if (hotel.owner != req.user._id) {

            throw new Error('Only hotel creator can delete it!');

        }

        await req.storage.deleteHotel(hotelId);

        res.redirect('/');

    } catch (err) {

        console.log(err.message);

        res.redirect('/');

    }

});

router.get('/book/:hotelId', isUser(), async (req, res) => {

    const hotelId = req.params.hotelId;

    try {

        await req.storage.bookHotel(hotelId, req.user._id);

        res.redirect('/hotels/details/' + hotelId);

    } catch (err) {

        console.log(err);

        res.redirect('/');

    }

});

module.exports = router;