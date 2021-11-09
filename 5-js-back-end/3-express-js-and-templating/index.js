const express = require('express');
const hbs = require('express-handlebars');

const storage = require('./util/storage');

const homeController = require('./controllers/homeController');
const catalogController = require('./controllers/catalogController');
const aboutController = require('./controllers/aboutController');

start();

async function start() {

    const app = express();

    app.use(express.urlencoded({extended: true}));

    app.use('/static', express.static('static'));

    app.engine('hbs', hbs({

        extname: '.hbs',

    }));

    app.set('view engine', 'hbs');

    app.use(await storage());

    app.get('/', homeController);

    app.use('/catalog', catalogController);

    app.get('/about', aboutController);

    const port = 3000;

    app.listen(port, (err) => {

        console.log(err ? err : 'Server listening on port ' + port + '...');
       
    });

}