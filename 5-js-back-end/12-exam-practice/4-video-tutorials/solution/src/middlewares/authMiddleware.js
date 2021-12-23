const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { TOKEN_SECRET, COOKIE_NAME, SALT_ROUNDS } = require('../config/constantsConfig.js');
const userService = require('../services/userService.js');

async function registerUser(username, password) {

    const existingUser = await userService.getUserByUsername(username);

    if (existingUser) {

        throw new Error('A user with this username already exists!');

    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = await userService.createUser(username, hashedPassword);

    return generateToken(newUser);

}

async function loginUser(username, password) {

    if (!username || !password) {

        throw new Error('Invalid username or password!');

    }

    const existingUser = await userService.getUserByUsername(username);

    const passwordsMatch = await bcrypt.compare(password, existingUser?.hashedPassword || '');

    if (!existingUser || !passwordsMatch) {

        throw new Error('Invalid username or password!');

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

function initAuthMidd() {

    return (req, res, next) => {

        if (parseToken(req, res)) {

            req.auth = {

                async register({ username, password }) {

                    const userToken = await registerUser(username, password);

                    res.cookie(COOKIE_NAME, userToken);

                },

                async login({ username, password }) {

                    const userToken = await loginUser(username, password);

                    res.cookie(COOKIE_NAME, userToken);

                },

                logout() { res.clearCookie(COOKIE_NAME) },

                getUserById: userService.getUserById,

            };

            next();

        }

    };

}

module.exports = initAuthMidd;