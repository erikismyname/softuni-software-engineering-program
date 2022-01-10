const router = require('express').Router();

const { isUser } = require('../middlewares/guardMiddlewares.js');

router.get('/create', isUser(), async (req, res) => {

    res.render('play/create', { title: 'Create' });

});

router.post('/create', isUser(), async (req, res) => {

    const playData = {
        title: req.body.title.trim(),
        description: req.body.description.trim(),
        imageUrl: req.body.imageUrl.trim(),
        isPublic: Boolean(req.body.isPublic),
        createdAt: new Date(),
        usersLiked: [],
        author: req.user._id,
    };

    try {

        await req.storage.createPlay(playData);

        res.redirect('/');

    } catch (err) {

        let errors;

        if (err.name == 'ValidationError') {

            errors = Object.values(err.errors).map(e => e.properties.message);

        } else {

            errors = [err.message];

        }

        const ctx = {
            title: 'Create',
            errors,
            playData,
        };

        res.render('play/create', ctx);

    }

});

router.get('/details/:playId', async (req, res) => {

    const playId = req.params.playId;

    try {

        const play = await req.storage.getPlayById(playId);

        play.isUser = Boolean(req.user);

        play.isAuthor = req.user?._id == play.author;

        play.isLiked = play.usersLiked.find(x => x._id == req.user?._id);

        const ctx = {
            title: 'Details',
            play,
        };

        res.render('play/details', ctx);

    } catch (err) {

        console.log(err);

        res.redirect('/404');

    }

});

router.get('/edit/:playId', isUser(), async (req, res) => {

    const playId = req.params.playId;

    try {

        const play = await req.storage.getPlayById(playId);

        if (play.author != req.user._id) {

            throw new Error('You cannot edit a play you have not created!');

        }

        const ctx = {
            title: 'Edit',
            play,
        };

        res.render('play/edit', ctx);

    } catch (err) {

        console.log(err.message);

        res.redirect('/play/details/' + playId);

    }

});

router.post('/edit/:playId', isUser(), async (req, res) => {

    const playId = req.params.playId;

    const playData = {
        title: req.body.title.trim(),
        description: req.body.description.trim(),
        imageUrl: req.body.imageUrl.trim(),
        isPublic: Boolean(req.body.isPublic),
    };

    try {

        const play = await req.storage.getPlayById(playId);

        if (play.author != req.user._id) {

            throw new Error('You cannot edit a play you have not created!');

        }

        await req.storage.editPlay(playId, playData);

        res.redirect('/play/details/' + playId);

    } catch (err) {

        let errors;

        // I use this in two places so I can create a util function and import it here

        if (err.name == 'ValidationError') {

            errors = Object.values(err.errors).map(e => e.properties.message);

        } else {

            errors = [err.message];

        }

        playData._id = req.params.playId;

        const ctx = {
            title: 'Edit',
            errors,
            play: {
                _id: req.params.playId,
                title: req.body.title,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
                isPublic: Boolean(req.body.isPublic),
            },
        };

        res.render('play/edit', ctx);

    }

});

router.get('/delete/:playId', isUser(), async (req, res) => {

    const playId = req.params.playId;

    try {

        const play = await req.storage.getPlayById(playId);

        if (play.author != req.user._id) {

            throw new Error('You cannot delete a play you have not created!');

        }

        await req.storage.deletePlay(playId);

        res.redirect('/');

    } catch (err) {

        console.log(err.message);

        res.redirect('/play/details/' + playId);

    }

});

router.get('/like/:playId', isUser(), async (req, res) => {

    const playId = req.params.playId;

    try {

        const play = await req.storage.getPlayById(playId);

        if (play.author == req.user._id) {

            throw new Error('You cannot like your own play!');

        }

        await req.storage.likePlay(playId, req.user._id);

        res.redirect('/play/details/' + playId);

    } catch (err) {

        console.log(err.message);

        res.redirect('/play/details/' + playId);

    }

});

module.exports = router;