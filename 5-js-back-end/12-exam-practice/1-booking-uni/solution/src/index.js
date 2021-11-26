const express = require('express');

const { PORT } = require('./config/constantsConfig.js');
const expressConfig = require('./config/expressConfig.js');
const routesConfig = require('./config/routesConfig.js');
const databaseConfig = require('./config/databaseConfig.js');

startApp();

async function startApp() {

    const app = express();

    expressConfig(app);

    routesConfig(app);

    await databaseConfig();

    app.listen(PORT, (err) => {

        if (err) {

            console.log('A server error occurred: ', err);

        } else {

            console.log('Server is up and running on port ' + PORT + '...');

        }

    });

}