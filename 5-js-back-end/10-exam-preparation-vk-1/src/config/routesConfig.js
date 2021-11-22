const homeController = require('../controllers/homeController.js');
const authController = require('../controllers/authController.js');
const hotelController = require('../controllers/hotelController.js');

module.exports = (app) => {

    app.use('/', homeController);

    app.use('/auth', authController);

    app.use('/hotels', hotelController);

};