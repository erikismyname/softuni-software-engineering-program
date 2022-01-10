const postService = require('../services/postService.js');

module.exports = () => (req, res, next) => {

    req.storage = {
        ...postService,
    };

    next();

};