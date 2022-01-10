const router = require('express').Router();
const { body, validationResult } = require('express-validator');

const { isGuest, isUser } = require('../middlewares/guardMiddlewares.js');

router.get('/register', isGuest(), (req, res) => {

    res.render('user/register', { title: 'Register' });

});

router.post('/register',

    isGuest(),

    body('email').isEmail().withMessage('Email must be a valid one!'),

    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long!').isAlphanumeric().withMessage('Password must consist only alphanumeric characters!'),

    body('rePass').custom((v, { req }) => {

        if (v != req.body.password) {

            throw new Error('Passwords must match!');

        }

        return true;

    }),

    async (req, res) => {

        const userData = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        };

        const errors = validationResult(req)
            .array()
            .map(e => e.msg);

        try {

            if (errors.length) {

                throw new Error(errors);

            }

            await req.auth.register(userData);

            res.redirect('/');

        } catch (err) {

            const ctx = {
                title: 'Register',
                errors,
                userData,
            };

            res.render('user/register', ctx);

        }

    }

);

router.get('/login', isGuest(), (req, res) => {

    res.render('user/login', { title: 'Login' });

});

router.post('/login', isGuest(), async (req, res) => {

    const userData = {
        username: req.body.username,
        password: req.body.password,
    }

    try {

        await req.auth.login(userData);

        res.redirect('/');

    } catch (err) {

        const ctx = {
            title: 'Login',
            errors: [err.message],
            userData,
        };

        res.render('user/login', ctx);

    }

});

router.get('/logout', isUser(), (req, res) => {

    req.auth.logout();

});

router.get('/profile', isUser(), async (req, res) => {

    try {

        const username = req.user.username;

        const user = await req.auth.getUserByUsername(username);

        const ctx = {
            title: 'Profile',
            user,
        };

        res.render('user/profile', ctx);

        console.log(user);

    } catch (err) {

        console.log(err.message);

        res.redirect('/');

    }



});

module.exports = router;