const router = require('express').Router();
const { body, validationResult } = require('express-validator');

const { isGuest, isUser } = require('../middlewares/guardMiddlewares.js');

router.get('/register', isGuest(), (req, res) => {

    res.render('user/register', { title: 'Register' });

});

router.post('/register',

    isGuest(),

    body('username').trim().isLength({ min: 3 }).withMessage('Username must be at least 3 characters long!').bail().isAlphanumeric().withMessage('Username must consist only alphanumeric characters!'),

    body('password').trim().isLength({ min: 3 }).withMessage('Password must be at least 3 characters long!').bail().isAlphanumeric().withMessage('Password must consist only alphanumeric characters!'),

    body('rePass').trim().custom((v, { req }) => {

        console.log(v, req.body.password);

        if (v != req.body.password) {

            return false;

        }

        return true;

    }).withMessage('Passwords must match!'),

    async (req, res) => {

        const userData = {
            username: req.body.username.trim(),
            password: req.body.password.trim(),
        };

        const { errors } = validationResult(req);

        const parsedErrors = errors.map(e => e.msg);

        try {

            if (parsedErrors.length) {

                throw new Error(parsedErrors);

            }

            await req.auth.register(userData);

            res.redirect('/');

        } catch (err) {

            const ctx = {
                title: 'Register',
                errors: parsedErrors,
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

        console.log(err.message);

        let errors = [err.message];

        if (err.type == 'Credential') {

            errors = ['Incorrect username or password!'];

        }

        const ctx = {
            title: 'Login',
            errors,
            userData,
        };

        res.render('user/login', ctx);

    }

});

router.get('/logout', isUser(), (req, res) => {

    req.auth.logout();

});

module.exports = router;