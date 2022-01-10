const homeController = require('../controllers/homeController.js');
const authController = require('../controllers/authController.js');
const tripController = require('../controllers/tripController.js');
const notFoundController = require('../controllers/notFoundController.js');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/trips', tripController);
    app.use('*', notFoundController);
};