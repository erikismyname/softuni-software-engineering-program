const cubeService = require('../services/cubeService.js');
const accessoryService = require('../services/accessoryService.js');

async function init() {

    return (req, res, next) => {

        const storage = Object.assign({}, cubeService, accessoryService);

        req.storage = storage;

        next();

    };

}

module.exports = init;