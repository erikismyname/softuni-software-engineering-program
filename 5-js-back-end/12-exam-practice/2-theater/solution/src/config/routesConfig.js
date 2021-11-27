const homeController = require('../controllers/homeController.js');
const authController = require('../controllers/authController.js');
const playController = require('../controllers/playController.js');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/plays', playController);
};