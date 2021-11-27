const router = require('express').Router();
const { body, validationResult } = require('express-validator');

const { isUser } = require('../middlewares/guardsMiddlewares.js');

router.get('/create', isUser(), (req, res) => {

    res.render('play/create', { title: 'Create' });

});

router.post('/create',

    isUser(),

    body('title')
        .trim()
        .notEmpty()
        .withMessage('Title is required!'),

    body('description')
        .trim()
        .notEmpty()
        .withMessage('Description is required!'),

    body('imageUrl')
        .trim()
        .notEmpty()
        .withMessage('Image URL is required!'),

    async (req, res) => {

        const playData = {
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            isPublic: Boolean(req.body.isPublic),
            createdAt: new Date(),
            author: req.user._id,
            usersLiked: [],
        };

        const errors = validationResult(req)
            .array()
            .map(e => e.msg);

        try {

            if (errors.length) {

                throw new Error('A creation validation error occurred!');

            }

            await req.storage.createPlay(playData);

            res.redirect('/');

        } catch (err) {

            console.log(err);

            const ctx = {
                title: 'Create',
                errors,
                playData,
            };

            res.render('play/create', ctx);

        }

    }

);

router.get('/details/:playId', isUser(), async (req, res) => {

    const playId = req.params.playId;

    try {

        const play = await req.storage.getPlayById(playId);

        play.isLiked = play.usersLiked.find(x => x == req.user._id);

        play.isAuthor = play.author == req.user._id;

        const ctx = {
            title: 'Details',
            play,
        };

        res.render('play/details', ctx);

    } catch (err) {

        console.log(err);

        res.redirect('/');

    }

});

router.get('/like/:playId', isUser(), async (req, res) => {

    const playId = req.params.playId;

    const userId = req.user._id;

    try {

        const play = await req.storage.getPlayById(playId);

        if (play.author == userId) {

            throw new Error('Play owner cannot like his/her own play!');

        } else if (play.usersLiked.find(x => x == userId)) {

            throw new Error('You cannot like a play more than once!');

        }

        await req.storage.likePlay(playId, userId);

    } catch (err) {

        console.log(err);

    }

    res.redirect('/plays/details/' + playId);

});

router.get('/delete/:playId', isUser(), async (req, res) => {

    const playId = req.params.playId;

    try {

        const play = await req.storage.getPlayById(playId);

        if (play.author != req.user._id) {

            throw new Error('A user can delete only his/her own plays!');

        }

        await req.storage.deletePlay(playId);

        res.redirect('/');

    } catch (err) {

        console.log(err);

        res.redirect('/plays/details/' + playId);

    }

});

router.get('/edit/:playId', isUser(), async (req, res) => {

    const playId = req.params.playId;

    try {

        const playData = await req.storage.getPlayById(playId);

        if (playData.author != req.user._id) {

            throw new Error('Only play creator can edit it!');

        }

        const ctx = {
            title: 'Edit',
            playData,
        };

        res.render('play/edit', ctx);

    } catch (err) {

        console.log(err);

        res.redirect('/');

    }

});

router.post('/edit/:playId',

    isUser(),

    body('title')
        .trim()
        .notEmpty()
        .withMessage('Title is required!'),

    body('description')
        .trim()
        .notEmpty()
        .withMessage('Description is required!'),

    body('imageUrl')
        .trim()
        .notEmpty()
        .withMessage('Image URL is required!'),

    async (req, res) => {

        const playId = req.params.playId;

        const playData = {
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            isPublic: Boolean(req.body.isPublic),
        };

        const errors = validationResult(req)
            .array()
            .map(e => e.msg);

        try {

            const play = await req.storage.getPlayById(playId);

            if (play.author != req.user._id) {

                throw new Error('Only the creator of the play can edit it!');

            } else if (errors.length) {

                throw new Error('An error when validating edited play occurred!');

            }

            await req.storage.editPlay(playId, playData);

            res.redirect('/plays/details/' + playId);

        } catch (err) {

            console.log(err);

            const ctx = {
                title: 'Edit',
                errors,
                playData: Object.assign({}, playData, { _id: playId }),
            };

            res.render('play/edit', ctx);

        }

    });

module.exports = router;