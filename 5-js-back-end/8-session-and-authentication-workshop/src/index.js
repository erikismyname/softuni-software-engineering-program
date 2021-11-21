const express = require('express');

const init = require('./middlewares/storageMiddleware.js');
const expressConfig = require('./config/expressConfig.js');
const databaseConfig = require('./config/databaseConfig.js');
const routesConfig = require('./config/routesConfig.js');

startApp();

async function startApp() {

    const app = express();

    await databaseConfig();
    
    expressConfig(app);
    
    app.use(await init());
    
    routesConfig(app);

    const port = 3000;

    app.listen(port, (err) => console.log(err ? err.message : `Server listening on port ${port}...`));

}