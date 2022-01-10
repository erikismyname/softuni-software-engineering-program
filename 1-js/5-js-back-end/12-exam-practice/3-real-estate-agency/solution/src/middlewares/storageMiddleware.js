const housingService = require('../services/housingtService.js');

module.exports = () => (req, res, next) => {

    req.storage = {
        ...housingService,
    };

    next();

};