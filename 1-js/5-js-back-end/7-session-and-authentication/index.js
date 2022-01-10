const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser())

app.get('/', (req, res) => {

    console.log(req.cookies);

    res.cookie('cookieParser', 1);

    res.send('Home Page');

});

const port = 3000;

app.listen(port, (err) => {

    console.log(err ? err.message : `Server listening on port ${port}...`);

});