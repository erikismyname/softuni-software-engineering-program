const homeController = require('../controllers/homeController.js');
const authController = require('../controllers/authController.js');
const postController = require('../controllers/postController.js');
const notFoundController = require('../controllers/notFoundController.js');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/posts', postController);
    app.use('*', notFoundController);
};