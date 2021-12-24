const tripService = require('../services/tripService.js');

module.exports = () => (req, res, next) => {

    req.storage = {
        ...tripService,
    };

    next();

};