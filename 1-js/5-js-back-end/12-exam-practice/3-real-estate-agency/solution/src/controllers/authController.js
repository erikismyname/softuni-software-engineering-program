const router = require('express').Router();
const { body, validationResult } = require('express-validator');

const { isGuest, isUser } = require('../middlewares/guardsMiddlewares.js');

router.get('/register', isGuest(), (req, res) => {

    res.render('user/register', { title: 'Login' });

});

router.post('/register',

    isGuest(),

    body('name')
        .trim()
        .notEmpty()
        .withMessage('Name is required!')
        .bail()
        .matches('^[A-Za-z]+ [A-Za-z]+$')
        .withMessage('Invalid name format!'),

    body('username')
        .trim()
        .notEmpty()
        .withMessage('Username is required!')
        .bail()
        .isLength({ min: 5 })
        .withMessage('Username must be at least 5 characters long!'),

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
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
        };

        const errors = validationResult(req)
            .array()
            .map(e => e.msg);

        try {

            if (errors.length) {

                const error = new Error('Error while validation register data!');

                error.type = 'Validation';

                throw error;

            }

            await req.auth.register(userData);

            res.redirect('/');

        } catch (err) {

            console.log(err);

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
        username: req.body.username.trim(),
        password: req.body.password.trim(),
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