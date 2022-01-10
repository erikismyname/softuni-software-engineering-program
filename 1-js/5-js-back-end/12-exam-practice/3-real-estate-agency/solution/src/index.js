const express = require('express');

const expressConfig = require('./config/expressConfig.js');
const routesConfig = require('./config/routesConfig.js');
const databaseConfig = require('./config/databaseConfig.js');
const { PORT } = require('./config/constantsConfig.js');

startApp();

async function startApp() {

    const app = express();

    expressConfig(app);

    routesConfig(app);

    try {

        await databaseConfig();

        console.log('DB is successfully connected!');

        app.listen(PORT, (err) => {

            if (err) {

                throw new Error(err);

            }

            console.log('Server is up and listening on port ' + PORT + '...');

        });

    } catch (err) {

        console.log(err);

    }

}