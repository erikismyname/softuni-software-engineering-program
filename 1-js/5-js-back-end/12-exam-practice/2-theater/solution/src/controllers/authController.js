const router = require('express').Router();
const { body, validationResult } = require('express-validator');

const { isGuest, isUser } = require('../middlewares/guardsMiddlewares.js');

router.get('/register', isGuest(), (req, res) => {

    res.render('user/register', { title: 'Register' });

});

router.post('/register',

    isGuest(),

    body('username')
        .trim()
        .isLength({ min: 3 })
        .withMessage('Username must be at least 3 characters long!')
        .bail()
        .isAlphanumeric()
        .withMessage('Username must consist only alphanumeric characters!'),

    body('password')
        .trim()
        .isLength({ min: 3 })
        .withMessage('Password must be at least 3 characters long!')
        .bail()
        .isAlphanumeric()
        .withMessage('Password must consist only alphanumeric characters!'),

    body('rePass')
        .trim()
        .custom((rePass, { req }) => rePass == req.body.password ? true : false)
        .withMessage('Passwords must match!'),

    async (req, res) => {

        const userData = {
            username: req.body.username,
            password: req.body.password,
        };

        const errors = validationResult(req)
            .array()
            .map(e => e.msg);

        try {

            if (errors.length) {

                throw new Error('A registration validation error occurred!');

            }

            await req.auth.register(userData);

            res.redirect('/');

        } catch (err) {

            console.log(err);

            const ctx = {
                title: 'Register',
                errors: err.name == 'Error' ? errors : [err.message],
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
    };

    try {

        await req.auth.login(userData);

        res.redirect('/');

    } catch (err) {

        console.log(err);

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

    res.redirect('/');

});

module.exports = router;