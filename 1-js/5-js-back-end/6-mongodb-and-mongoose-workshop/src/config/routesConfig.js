const { getAbout } = require('../controllers/aboutController.js');
const { getCatalog } = require('../controllers/catalogController.js');
const { getCreate, postCreate } = require('../controllers/createController.js');
const { getDetails, getAttachAccessory, postAttachAccessory } = require('../controllers/detailsController.js');
const { getNotFound } = require('../controllers/notFoundController.js');
const { getEdit, postEdit } = require('../controllers/editController.js');
const { postComment } = require('../controllers/commentsController.js');
const { getAccessory, postAccessory } = require('../controllers/accessoriesController.js')

module.exports = (app) => {
    app.get('/', getCatalog);
    app.get('/about', getAbout);
    app.get('/create', getCreate);
    app.post('/create', postCreate);
    app.get('/details/:id', getDetails);
    app.get('/edit/:id', getEdit);
    app.post('/edit/:id', postEdit);

    app.post('/comments/:cubeId/create', postComment);

    app.get('/accessory/create', getAccessory);
    app.post('/accessory/create', postAccessory);

    app.get('/details/:id/attach', getAttachAccessory);
    app.post('/details/:id/attach', postAttachAccessory);

    app.all('*', getNotFound);
};