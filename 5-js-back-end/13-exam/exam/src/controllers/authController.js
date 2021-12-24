const router = require('express').Router();
const { body, validationResult } = require('express-validator');

const { isGuest, isUser } = require('../middlewares/guardsMiddlewares.js');

router.get('/register', isGuest(), (req, res) => {

    res.render('user/register', { title: 'Register' });

});

router.post('/register',

    isGuest(),

    body('firstName')
        .trim()
        .notEmpty()
        .withMessage('First name is required!')
        .bail()
        .isLength({ min: 3 })
        .withMessage('First name must be at least 3 characters long!')
        .bail()
        .isAlpha()
        .withMessage('First name must contain only latin characters!'),

    body('lastName')
        .trim()
        .notEmpty()
        .withMessage('Last name is required!')
        .bail()
        .isLength({ min: 5 })
        .withMessage('Last name must be at least 5 characters long!')
        .bail()
        .isAlpha()
        .withMessage('Last name must contain only latin characters!'),

    body('email')
        .trim()
        .notEmpty()
        .withMessage('Email is required!')
        .bail()
        .matches('^[a-z]+@[a-z]+.[a-z]+$')
        .withMessage('Email must be a valid one!'),

    body('password')
        .trim()
        .notEmpty()
        .withMessage('Password is required!')
        .bail()
        .isLength({ min: 4 })
        .withMessage('Password must be at least 4 characters long!'),

    body('rePass')
        .trim()
        .custom((rePass, { req }) => rePass == req.body.password ? true : false)
        .withMessage('Passwords must match!'),

    async (req, res) => {

        const userData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
        };

        const errors = validationResult(req)
            .array()
            .map(e => e.msg);

        try {

            if (errors.length) {

                const error = new Error('Error when validation register user data!');

                error.type = 'Validation';

                throw error;

            }

            await req.auth.register(userData);

            res.redirect('/');

        } catch (err) {

            console.log(err.message);

            const ctx = {
                title: 'Register',
                errors: err.type == 'Validation' ? errors : [err.message],
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
        email: req.body.email.trim(),
        password: req.body.password.trim(),
    };

    try {

        await req.auth.login(userData);

        res.redirect('/');

    } catch (err) {

        console.log(err.message);

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