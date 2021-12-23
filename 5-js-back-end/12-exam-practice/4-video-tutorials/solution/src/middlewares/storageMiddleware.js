const courseService = require('../services/courseService.js');

module.exports = () => (req, res, next) => {

    req.storage = {
        ...courseService,
    };

    next();

};