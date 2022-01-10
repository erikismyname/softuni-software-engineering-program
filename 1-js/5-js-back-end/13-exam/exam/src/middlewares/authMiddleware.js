const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { TOKEN_SECRET, COOKIE_NAME, SALT_ROUNDS } = require('../config/constantsConfig.js');
const userService = require('../services/userService.js');

async function registerUser(firstName, lastName, email, password) {

    const existingUser = await userService.getUserByEmail(email);

    if (existingUser) {

        throw new Error('A user with this email already exists!');

    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = await userService.createUser(firstName, lastName, email, hashedPassword);

    return generateToken(newUser);

}

async function loginUser(email, password) {

    if (!email || !password) {

        throw new Error('Invalid email or password!');

    }

    const existingUser = await userService.getUserByEmail(email);

    const passwordsMatch = await bcrypt.compare(password, existingUser?.hashedPassword || '');

    if (!existingUser || !passwordsMatch) {

        throw new Error('Invalid email or password!');

    }

    return generateToken(existingUser);

}

function generateToken(userData) {

    return jwt.sign({
        _id: userData._id,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
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

                async register({ firstName, lastName, email, password }) {

                    const userToken = await registerUser(firstName, lastName, email, password);

                    res.cookie(COOKIE_NAME, userToken);

                },

                async login({ email, password }) {

                    const userToken = await loginUser(email, password);

                    res.cookie(COOKIE_NAME, userToken);

                },

                logout() { res.clearCookie(COOKIE_NAME) },

                getUserByEmail: userService.getUserByEmail,

            };

            next();

        }

    };

}

module.exports = initAuthMidd;