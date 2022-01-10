const hotelService = require('../services/hotelService.js');

module.exports = () => (req, res, next) => {

    req.storage = {
        ...hotelService,
    };

    next();

};