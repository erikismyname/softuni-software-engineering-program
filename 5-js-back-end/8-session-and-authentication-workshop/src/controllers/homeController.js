const expressRouter = require('express').Router();

expressRouter.get('/', (req, res) => res.redirect('/products'));

expressRouter.get('/about', (req, res) => {

    res.render('about', { title: 'About' });

});

expressRouter.get('*', (req, res) => {

    res.render('404', { title: 'Not Found' });

});

module.exports = expressRouter;