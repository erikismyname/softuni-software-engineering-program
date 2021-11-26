const router = require('express').Router();
const { body, validationResult } = require('express-validator');

const { isUser } = require('../middlewares/guardsMiddlewares.js');

router.get('/create', isUser(), (req, res) => {

    res.render('hotel/create', { title: 'Create' });

});

router.post('/create',

    isUser(),

    body('name')
        .trim()
        .isLength({ min: 4 })
        .withMessage('Hotel name must be at least 4 characters long!'),

    body('city')
        .trim()
        .isLength({ min: 3 })
        .withMessage('City name must be at least 3 characters long!'),

    body('rooms')
        .isInt({ min: 1, max: 100 })
        .withMessage('Number of free rooms must be between 1 and 100!'),

    body('imageUrl')
        .trim()
        .isURL()
        .withMessage('Image URL must be a valid one!'),

    async (req, res) => {

        const hotelData = {
            name: req.body.name,
            city: req.body.city,
            imageUrl: req.body.imageUrl,
            rooms: req.body.rooms,
            bookedBy: [],
            owner: req.user._id,
        };

        const errors = validationResult(req)
            .array()
            .map(e => e.msg);

        try {

            if (errors.length) {

                throw new Error('A creation validation error occurred!');

            }

            const existingHotel = await req.storage.getHotelByName(hotelData.name);

            if (existingHotel) {

                throw new ReferenceError('Hotel already exists!');

            }

            await req.storage.createHotel(hotelData);

            res.redirect('/');

        } catch (err) {

            console.log(err);

            const ctx = {
                title: 'Create',
                errors: err.name == 'Error' ? errors : [err.message],
                hotelData,

            };

            res.render('hotel/create', ctx);

        }

    }

);

router.get('/details/:hotelId', isUser(), async (req, res) => {

    const hotelId = req.params.hotelId;

    try {

        const hotel = await req.storage.getHotelById(hotelId);

        hotel.isCreator = req.user._id == hotel.owner;

        hotel.isBooked = hotel.bookedBy.find(x => x == req.user._id);

        const ctx = {
            title: 'Details',
            hotel,
        };

        res.render('hotel/details', ctx);

    } catch (err) {

        console.log('No such hotel in DB!');

        res.redirect('/');

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

        console.log(err);

        res.redirect('/');

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

router.post('/edit/:hotelId',

    isUser(),

    body('name')
        .trim()
        .isLength({ min: 4 })
        .withMessage('Hotel name must be at least 4 characters long!'),

    body('city')
        .trim()
        .isLength({ min: 3 })
        .withMessage('City name must be at least 3 characters long!'),

    body('rooms')
        .isInt({ min: 1, max: 100 })
        .withMessage('Number of free rooms must be between 1 and 100!'),

    body('imageUrl')
        .trim()
        .isURL()
        .withMessage('Image URL must be a valid one!'),

    async (req, res) => {

        const hotelId = req.params.hotelId;

        const hotelData = {
            name: req.body.name,
            city: req.body.city,
            imageUrl: req.body.imageUrl,
            rooms: req.body.rooms,
        };

        const errors = validationResult(req)
            .array()
            .map(e => e.msg);

        try {

            if (errors.length) {

                throw new Error('A validation error when editing occurred!');

            }

            await req.storage.editHotel(hotelId, hotelData);

            res.redirect('/hotels/details/' + hotelId);

        } catch (err) {

            console.log(err);

            const hotel = Object.assign({}, hotelData, { _id: hotelId });

            const ctx = {
                title: 'Edit',
                errors,
                hotel,
            };

            res.render('hotel/edit', ctx)

        }

    }

);

router.get('/book/:hotelId', isUser(), async (req, res) => {

    const hotelId = req.params.hotelId;

    const userId = req.user._id;

    try {

        const hotel = await req.storage.getHotelById(hotelId);

        if (hotel.owner == userId) {

            throw new Error('Hotel creator cannot book a room in his own hotel!');

        } else if (hotel.bookedBy.find(x => x == userId)) {

            throw new Error('You can book a room in a hotel only once!');

        }

        await req.storage.bookHotel(hotelId, userId);

        res.redirect('/hotels/details/' + hotelId);

    } catch (err) {

        console.log(err);

        res.redirect('/');

    }

});

module.exports = router;