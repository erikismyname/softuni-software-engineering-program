const router = require('express').Router();
const { body, validationResult } = require('express-validator');

const { isUser } = require('../middlewares/guardsMiddlewares.js');

router.get('/shared', async (req, res) => {

    try {

        const trips = await req.storage.getAllTrips();

        const ctx = {
            title: 'Shared',
            trips,
        };

        res.render('trip/shared', ctx);

    } catch (err) {

        console.log(err.message);

        res.redirect('/');

    }

});

router.get('/create', isUser(), (req, res) => {

    res.render('trip/create', { title: 'Create' });

});

router.post('/create',

    isUser(),

    body('startPoint')
        .trim()
        .notEmpty()
        .withMessage('Starting point is required!')
        .bail()
        .isLength({ min: 4 })
        .withMessage('Starting point must be at least 4 characters long!'),

    body('endPoint')
        .trim()
        .notEmpty()
        .withMessage('Ending point is required!')
        .bail()
        .isLength({ min: 4 })
        .withMessage('Ending point must be at least 4 characters long!'),

    body('carImage')
        .trim()
        .notEmpty()
        .withMessage('Car image is required!')
        .bail()
        .matches('^https?:\/\/')
        .withMessage('Image URL must be a valid one!'),

    body('carBrand')
        .trim()
        .notEmpty()
        .withMessage('Car brand is required!')
        .bail()
        .isLength({ min: 4 })
        .withMessage('Car brand must be at least 4 characters long!'),

    body('seats')
        .trim()
        .notEmpty()
        .withMessage('Seats are required!')
        .bail()
        .isInt({ min: 0, max: 4 })
        .withMessage('Seats must be between 0 and 4!'),

    body('price')
        .trim()
        .notEmpty()
        .withMessage('Price is required!')
        .bail()
        .isInt({ min: 1, max: 50 })
        .withMessage('Price must be a number between 1 and 50!'),

    body('description')
        .trim()
        .notEmpty()
        .withMessage('Description is required!')
        .bail()
        .isLength({ min: 10 })
        .withMessage('Description must be minimum 10 characters long!'),

    async (req, res) => {

        const tripData = {
            startPoint: req.body.startPoint,
            endPoint: req.body.endPoint,
            date: req.body.date,
            time: req.body.time,
            carImage: req.body.carImage,
            carBrand: req.body.carBrand,
            seats: Number(req.body.seats),
            price: Number(req.body.price),
            description: req.body.description,
            creator: req.user._id,
        };

        const errors = validationResult(req)
            .array()
            .map(e => e.msg);

        try {

            if (errors.length) {

                const error = new Error('Error when validating create trip data!');

                error.type = 'Validation';

                throw error;

            }

            const newTrip = await req.storage.createTrip(tripData);

            const user = await req.auth.getUserById(req.user._id);

            user.tripsHistory.push(newTrip._id);

            await user.save();

            res.redirect('/trips/shared');

        } catch (err) {

            console.log(err.message);

            const ctx = {
                title: 'Create',
                errors: err.type == 'Validation' ? errors : [err.message],
                tripData,
            };

            res.render('trip/create', ctx);

        }

    }

);

router.get('/details/:tripId', async (req, res) => {

    const tripId = req.params.tripId;

    const userId = req.user?._id;

    try {

        const trip = await req.storage.getTripById(tripId);

        trip.isCreator = trip.creator._id == userId;

        trip.joined = trip.buddies.find(x => x._id == userId);

        const ctx = {
            title: 'Details',
            trip,
        };

        res.render('trip/details', ctx);

    } catch (err) {

        console.log(err.message);

        res.redirect('/');

    }

});

router.get('/join/:tripId', isUser(), async (req, res) => {

    const tripId = req.params.tripId;

    const userId = req.user._id;

    try {

        const trip = await req.storage.getTripById(tripId);

        if (trip.creator._id == userId) {

            throw new Error('Offer creator cannot join his/her own trip!');

        } else if (trip.buddies.find(x => x._id == userId)) {

            throw new Error('You can join every trip only once!');

        }

        await req.storage.joinTrip(tripId, userId);

        res.redirect('/trips/details/' + tripId);

    } catch (err) {

        console.log(err.message);

        res.redirect('/');

    }

});

router.get('/delete/:tripId', isUser(), async (req, res) => {

    const tripId = req.params.tripId;

    try {

        const trip = await req.storage.getTripById(tripId);

        if (trip.creator._id != req.user._id) {

            throw new Error('Only trip creator can delete it!');

        }

        await req.storage.deleteTrip(tripId);

        res.redirect('/trips/shared');

    } catch (err) {

        console.log(err.message);

        res.redirect('/');

    }

});

router.get('/edit/:tripId', isUser(), async (req, res) => {

    const tripId = req.params.tripId;

    try {

        const trip = await req.storage.getTripById(tripId);

        if (trip.creator._id != req.user._id) {

            throw new Error('Only trip creator can edit it!');

        }

        const ctx = {
            title: 'Edit',
            trip,
        };

        res.render('trip/edit', ctx);

    } catch (err) {

        console.log(err.message);

        res.redirect('/');

    }

});

router.post('/edit/:tripId',

    isUser(),

    body('startPoint')
        .trim()
        .notEmpty()
        .withMessage('Starting point is required!')
        .bail()
        .isLength({ min: 4 })
        .withMessage('Starting point must be at least 4 characters long!'),

    body('endPoint')
        .trim()
        .notEmpty()
        .withMessage('Ending point is required!')
        .bail()
        .isLength({ min: 4 })
        .withMessage('Ending point must be at least 4 characters long!'),

    body('carImage')
        .trim()
        .notEmpty()
        .withMessage('Car image is required!')
        .bail()
        .matches('^https?:\/\/')
        .withMessage('Image URL must be a valid one!'),

    body('carBrand')
        .trim()
        .notEmpty()
        .withMessage('Car brand is required!')
        .bail()
        .isLength({ min: 4 })
        .withMessage('Car brand must be at least 4 characters long!'),

    body('seats')
        .trim()
        .notEmpty()
        .withMessage('Seats are required!')
        .bail()
        .isInt({ min: 0, max: 4 })
        .withMessage('Seats must be between 0 and 4!'),

    body('price')
        .trim()
        .notEmpty()
        .withMessage('Price is required!')
        .bail()
        .isInt({ min: 1, max: 50 })
        .withMessage('Price must be a number between 1 and 50!'),

    body('description')
        .trim()
        .notEmpty()
        .withMessage('Description is required!')
        .bail()
        .isLength({ min: 10 })
        .withMessage('Description must be minimum 10 characters long!'),

    async (req, res) => {

        const tripId = req.params.tripId;

        const tripData = {
            startPoint: req.body.startPoint,
            endPoint: req.body.endPoint,
            date: req.body.date,
            time: req.body.time,
            carImage: req.body.carImage,
            carBrand: req.body.carBrand,
            seats: Number(req.body.seats),
            price: Number(req.body.price),
            description: req.body.description,
        };

        const errors = validationResult(req)
            .array()
            .map(e => e.msg);

        try {

            const trip = await req.storage.getTripById(tripId);

            if (trip.creator._id != req.user._id) {

                throw new Error('Only trip creator can edit it!');

            } else if (errors.length) {

                const error = new Error('Error when validating trip edit data!');

                error.type = 'Validation';

                throw error;

            }

            await req.storage.editTrip(tripId, tripData);

            res.redirect('/trips/details/' + tripId);

        } catch (err) {

            console.log(err.message);

            const ctx = {
                title: 'Edit',
                errors: err.type == 'Validation' ? errors : [err.message],
                trip: Object.assign({}, tripData, { _id: tripId }),
            };

            res.render('trip/edit', ctx);

        }

    }

);

module.exports = router;