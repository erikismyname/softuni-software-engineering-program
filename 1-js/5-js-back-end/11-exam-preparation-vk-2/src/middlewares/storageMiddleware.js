const playService = require('../services/playService.js');

module.exports = () => (req, res, next) => {

    req.storage = {
        ...playService,
    };

    next();

};