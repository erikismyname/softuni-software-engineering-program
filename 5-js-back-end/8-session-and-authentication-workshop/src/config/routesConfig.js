const { postComment } = require('../controllers/commentsController.js');
const cubeController = require('../controllers/cubeController.js');
const accessoryController = require('../controllers/accessoryController.js');
const homeController = require('../controllers/homeController.js');
const authController = require('../controllers/authController.js');
const { isAuth } = require('../middlewares/guards.js');

module.exports = (app) => {

    app.use('/products', cubeController);

    app.use('/accessory', accessoryController);

    app.post('/comments/:cubeId/create', isAuth(), postComment);

    app.use('/auth', authController);

    app.use('/', homeController);

};