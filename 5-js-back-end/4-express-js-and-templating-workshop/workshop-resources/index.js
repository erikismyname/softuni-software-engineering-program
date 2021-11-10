const express = require('express');
const hbs = require('express-handlebars');

const { init } = require('./models/storage.js');

const { getAbout } = require('./controllers/aboutController.js');
const { getCatalog } = require('./controllers/catalogController.js');
const { getCreate, postCreate } = require('./controllers/createController.js');
const { getDetails } = require('./controllers/detailsController.js');
const { getNotFound } = require('./controllers/notFoundController.js');
const { getEdit, postEdit } = require('./controllers/editController.js');

startApp();

async function startApp() {

    const app = express();

    app.use(await init());

    app.use(express.urlencoded({ extended: true }));

    app.use('/static', express.static('static'));

    app.engine('hbs', hbs({
        extname: '.hbs',
    }));

    app.set('view engine', 'hbs');

    app.get('/', getCatalog);
    app.get('/about', getAbout);
    app.get('/create', getCreate);
    app.post('/create', postCreate);
    app.get('/details/:id', getDetails);
    app.get('/edit/:id', getEdit);
    app.post('/edit/:id', postEdit);
    app.all('*', getNotFound)

    const port = 3000;

    app.listen(port, () => console.log(`Server listening on port ${port}...`));

}