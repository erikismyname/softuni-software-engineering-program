const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userService = require('../services/userService.js');
const { TOKEN_SECRET, COOKIE_NAME } = require('../config/index.js');

module.exports = () => (req, res, next) => {

    req.auth = {
        register,
        login,
        logout,
    };

    if (readToken(req)) {
        next();
    }

    async function register({ username, password, repeatPassword }) {

        if (!username || !password || !repeatPassword) {

            throw new Error('All fields are required!')

        } else if (password != repeatPassword) {

            throw new Error('Passwords must match!');

        }

        const hashedPassword = await bcrypt.hash(password, 7);

        const user = await userService.createUser(username, hashedPassword);

        req.user = createToken(user);

    }

    async function login({ username, password }) {

        const user = await userService.getUserByUsername(username);

        if (!user) {

            throw new Error('Wrong username or password!');

        } else {

            const isMatch = await bcrypt.compare(password, user.hashedPassword);

            if (!isMatch) {

                throw new Error('Wrong username or password!');

            } else {

                req.user = createToken(user);

            }

        }

    }

    async function logout() {

        res.clearCookie(COOKIE_NAME);

    }

    function createToken(user) {

        const userViewModel = { _id: user._id, username: user.username };

        const token = jwt.sign(userViewModel, TOKEN_SECRET);

        res.cookie(COOKIE_NAME, token, { httpOnly: true });

        return userViewModel;

    }

    function readToken(req) {

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

};