const express = require('express');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const path = require('path');

const initAuthMiddleware = require('../middlewares/authMiddleware.js');
const storageMiddleware = require('../middlewares/storageMiddleware.js');

module.exports = (app) => {
    app.engine('hbs', hbs({
        extname: '.hbs',
    }));
    app.set('view engine', 'hbs');
    app.set('views', path.resolve(__dirname, '../views'))
    app.use('/static', express.static(path.resolve(__dirname, '../static')));
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(initAuthMiddleware())
    app.use(storageMiddleware());
};