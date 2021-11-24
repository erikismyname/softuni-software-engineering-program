const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userService = require('../services/userService.js');
const { TOKEN_SECRET, COOKIE_NAME } = require('../config');

function init() {

    return (req, res, next) => {

        if (parseToken(req, res)) {

            req.auth = {
                async register({ username, password }) {
                    const token = await registerUser(username, password);
                    res.cookie(COOKIE_NAME, token);
                },
                async login({ username, password }) {
                    const token = await loginUser(username, password);
                    res.cookie(COOKIE_NAME, token);
                },
                logout() {
                    res.clearCookie(COOKIE_NAME);
                    res.redirect('/');
                },
            };

            next();

        }

    };

}

async function registerUser(username, password) {

    const existingUser = await userService.getUserByUsername(username);

    if (existingUser) {

        throw new Error('Username is taken!');

    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userService.createUser(username, hashedPassword);

    return generateToken(newUser);

}

async function loginUser(username, password) {

    const existingUser = await userService.getUserByUsername(username);

    if (!existingUser) {

        const err = new Error('No such user in DB!');

        err.type = 'Credential';

        throw err;

    }

    const areEqualPasswords = await bcrypt.compare(password, existingUser.hashedPassword);

    if (!areEqualPasswords) {

        const err = new Error('Incorrect password!');

        err.type = 'Credential';

        throw err;

    }

    return generateToken(existingUser);

}

function generateToken(userData) {

    return jwt.sign({
        _id: userData._id,
        username: userData.username,
    }, TOKEN_SECRET);

}

function parseToken(req, res) {

    const token = req.cookies[COOKIE_NAME];

    if (token) {

        try {

            const userData = jwt.verify(token, TOKEN_SECRET);

            req.user = userData;

            res.locals.user = userData;

        } catch (err) {

            res.clearCookie(COOKIE_NAME);

            res.redirect('/auth/login');

            return false;

        }

    }

    return true;

}

module.exports = init;