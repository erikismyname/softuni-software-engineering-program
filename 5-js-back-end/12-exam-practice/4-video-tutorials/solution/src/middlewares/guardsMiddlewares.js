const isGuest = () => (req, res, next) => !req.user ? next() : res.redirect('/');

const isUser = () => (req, res, next) => req.user ? next() : res.redirect('/auth/login');

module.exports = {
    isGuest,
    isUser,
};