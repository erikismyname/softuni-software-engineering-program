const router = require('express').Router();

const { isUser } = require('../middlewares/guardsMiddlewares.js');

router.get('/for-rent', async (req, res) => {

    const ctx = {
        title: 'For Rent'
    };

    try {

        const housing = await req.storage.getAllOffers();

        ctx.housing = housing;

    } catch (err) {

        console.log(err);

        ctx.errors = ['Could not load housing offers!'];

    }

    console.log(ctx)

    res.render('housing/for-rent', ctx);

});

router.get('/create', isUser(), (req, res) => {

    res.render('housing/create', { title: 'Create' });

});

router.post('/create', isUser(), async (req, res) => {

    const housingData = {
        name: req.body.name.trim(),
        type: req.body.type.trim(),
        year: Number(req.body.year.trim()),
        city: req.body.city.trim(),
        imageUrl: req.body.imageUrl.trim(),
        description: req.body.description.trim(),
        rooms: Number(req.body.rooms.trim()),
        rentedBy: [],
        owner: req.user._id,
    };

    try {

        await req.storage.createHousing(housingData);

        res.redirect('/housing/for-rent');

    } catch (err) {

        console.log(err);

        let errors;

        if (err.name == 'ValidationError') {

            errors = Object.values(err.errors).map(e => e.properties?.message);

            console.log(errors)

        } else {

            errors = [err.message];

        }

        const ctx = {
            title: 'Create',
            errors,
            housingData,
        };

        res.render('housing/create', ctx);

    }

});

router.get('/details/:housingId', async (req, res) => {

    const housingId = req.params.housingId;

    const userId = req.user?._id;

    const ctx = {};

    try {

        const housing = await req.storage.getHousingById(housingId);

        housing.isOwner = housing.owner == userId;

        housing.isRented = housing.rentedBy.find(x => x._id == userId);

        housing.isFull = housing.rooms == 0;

        housing.hasTenants = housing.rentedBy.length;

        housing.tenants = housing.rentedBy.map(e => e.name).join(', ');

        ctx.title = 'Details';

        ctx.housing = housing;

        res.render('housing/details', ctx);

    } catch (err) {

        console.log(err);

        ctx.title = 'Home';

        ctx.errors = ['Could not load housing details!'];

        res.render('home/home', ctx);

    }

});

router.get('/rent/:housingId', isUser(), async (req, res) => {

    const housingId = req.params.housingId;

    const userId = req.user._id;

    try {

        const housing = await req.storage.getHousingById(housingId);

        if (housing.owner == userId) {

            throw new Error('Offer creator cannot rent his/her own housing!');

        } else if (housing.rentedBy.find(x => x._id == userId)) {

            throw new Error('You can rent a housing only once!');

        }

        await req.storage.rentHousing(housingId, userId);

        res.redirect('/housing/details/' + housingId);

    } catch (err) {

        console.log(err);

        res.redirect('/');

    }

});

router.get('/delete/:housingId', isUser(), async (req, res) => {

    const housingId = req.params.housingId;

    try {

        const housing = await req.storage.getHousingById(housingId);

        if (housing.owner != req.user._id) {

            throw new Error('Only offer creator can delete it!');

        }

        await req.storage.deleteHousing(housingId);

        res.redirect('/housing/for-rent');

    } catch (err) {

        console.log(err);

        res.redirect('/');

    }

});

router.get('/edit/:housingId', isUser(), async (req, res) => {

    const housingId = req.params.housingId;

    try {

        const housing = await req.storage.getHousingById(housingId);

        if (housing.owner != req.user._id) {

            throw new Error('Only offer creator can edit it!');

        }

        const ctx = {
            title: 'Edit',
            housing,
        };

        res.render('housing/edit', ctx);

    } catch (err) {

        console.log(err);

        res.redirect('/');

    }

});

router.post('/edit/:housingId', isUser(), async (req, res) => {

    const housingId = req.params.housingId;

    const housingData = {
        name: req.body.name.trim(),
        type: req.body.type.trim(),
        year: Number(req.body.year.trim()),
        city: req.body.city.trim(),
        imageUrl: req.body.imageUrl.trim(),
        description: req.body.description.trim(),
        rooms: Number(req.body.rooms.trim()),
    };

    try {

        const housing = await req.storage.getHousingById(housingId);

        if (housing.owner != req.user._id) {

            throw new Error('Only offer creator can edit it!');

        }

        await req.storage.editHousing(housingId, housingData);

        res.redirect('/housing/details/' + housingId);

    } catch (err) {

        console.log(err);

        let errors;

        if (err.name == 'ValidationError') {

            errors = Object.values(err.errors).map(e => e.properties.message);

        } else {

            errors = [err.message];

        }

        const ctx = {
            title: 'Edit',
            errors,
            housing: Object.assign({}, housingData, { _id: housingId }),
        };

        res.render('housing/edit', ctx);

    }

});

router.get('/search', isUser(), (req, res) => {

    res.render('housing/search', { title: 'Search' });

});

router.post('/search', isUser(), async (req, res) => {

    const query = req.body.query;

    const ctx = {
        title: 'Search',
    };

    try {

        const housings = await req.storage.searchHousings(query);

        ctx.housings = housings;

    } catch (err) {

        console.log(err);

        ctx.errors = ['Could not load housings!'];

    }

    res.render('housing/search', ctx);

});

module.exports = router;