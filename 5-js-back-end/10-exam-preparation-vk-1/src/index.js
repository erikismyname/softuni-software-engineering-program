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

    await dbConfig();

    app.listen(PORT, () => console.log('Server is up and running on port ' + PORT + '...'));

}