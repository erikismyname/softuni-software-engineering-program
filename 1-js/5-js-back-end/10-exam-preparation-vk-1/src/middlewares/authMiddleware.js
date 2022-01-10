const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userService = require('../services/userService.js');
const { TOKEN_SERCRET, COOKIE_NAME } = require('../config/');

function init() {

    return async (req, res, next) => {

        if (parseToken(req, res)) {

            req.auth = {
                async register({ email, username, password }) {
                    const token = await registerUser(email, username, password);
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
                getUserByUsername: userService.getUserByUsername,
            };

            next();

        }

    };

}

async function registerUser(email, username, password) {

    const existingUser = await userService.getUserByUsername(username);

    const existingEmail = await userService.getUserByEmail(email);

    if (existingUser) {

        throw new Error('Username is already taken!');

    } else if (existingEmail) {

        throw new Error('Email is already taken!');

    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userService.createUser(email, username, hashedPassword);

    return generateToken(newUser);

}

async function loginUser(username, password) {

    const user = await userService.getUserByUsername(username);

    if (!user) {

        throw new Error('No such user in DB!')

    }

    const areEqual = await bcrypt.compare(password, user.hashedPassword);

    if (!areEqual) {

        throw new Error('Incorrect password!');

    }

    return generateToken(user);

}

function generateToken(userData) {

    return jwt.sign({
        _id: userData._id,
        username: userData.username,
        email: userData.email,
    }, TOKEN_SERCRET);

}

function parseToken(req, res) {

    const token = req.cookies[COOKIE_NAME];

    if (token) {

        try {

            const userData = jwt.verify(token, TOKEN_SERCRET);

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