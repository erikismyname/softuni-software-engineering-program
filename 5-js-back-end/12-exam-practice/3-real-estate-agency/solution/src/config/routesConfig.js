const homeController = require('../controllers/homeController.js');
const authController = require('../controllers/authController.js');
const housingController = require('../controllers/housingController.js');
const notFoundController = require('../controllers/notFoundController.js');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/housing', housingController);
    app.use('*', notFoundController);
};