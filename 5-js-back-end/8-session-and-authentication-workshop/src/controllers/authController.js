const expressRouter = require('express').Router();

const { isGuest, isAuth } = require('../middlewares/guards.js');

expressRouter.get('/register', isGuest(), (req, res) => {

    res.render('register', { title: 'Register' });

});

expressRouter.post('/register', isGuest(), async (req, res) => {

    try {

        await req.auth.register(req.body);

        res.redirect('/products');

    } catch (err) {

        const ctx = {
            title: 'Register',
            error: err.message,
            data: { username: req.body.username },
        };

        res.render('register', ctx);

    }


});

expressRouter.get('/login', isGuest(), (req, res) => {

    res.render('login', { title: 'Login' });

});

expressRouter.post('/login', isGuest(), async (req, res) => {

    try {

        await req.auth.login(req.body);

        res.redirect('/products');

    } catch (err) {

        const ctx = {
            title: 'Login',
            error: err.message,
            data: { username: req.body.username },
        };

        res.render('login', ctx);

    }

});

expressRouter.get('/logout', isAuth(), (req, res) => {

    req.auth.logout();

    res.redirect('/products');

});

module.exports = expressRouter;