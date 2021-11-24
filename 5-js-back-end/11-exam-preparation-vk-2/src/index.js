const express = require('express');

const { PORT } = require('./config');
const expressConfig = require('./config/expressConfig.js');
const dbConfig = require('./config/databaseConfig.js');
const routesConfig = require('./config/routesConfig.js');

startApp();

async function startApp() {

    const app = express();

    expressConfig(app);

    routesConfig(app);

    try {

        await dbConfig();

    } catch (err) {

        console.log('A DB error occured: ', err);

    }

    app.listen(PORT, (err) => {

        if (err) {

            console.log('A server error occured: ', err);

        } else {

            console.log('Server up and listening on port ' + PORT + '...');

        }

    });

}