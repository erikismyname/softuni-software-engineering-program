const express = require('express');

const app = express();

app.get('/', (req, res) => {

    res.send('Homepage');

});

app.get('/tos', (req, res) => {

    // res.download('./demo.pdf'); 

    // res.sendFile(__dirname + '/demo.pdf');

});

app.get('/contacts', (req, res) => {

    res.redirect('/about');

});

app.get('/about', (req, res) => {

    res.send('Contacts page');

});

app.route('/cars')
    .get((req, res) => {

        res.send('Cars page');

    })
    .post((req, res) => {

        res.send('Created car');

    });

app.get('/users/:userId', (req, res) => {

    console.log(req.params);

    console.log(req.params.userId);

    res.send('User ' + req.params.userId + ' page');

});

app.get('/catalog', (req, res, next) => {

    console.log('Middleware execution...');

    next();

}, (req, res) => {

    console.log('After middleware');

    res.send('Catalog');

});

app.post('/create', (req, res) => {

    res.status(201)
        .send('Created');

});

app.put('/update', (req, res) => {

    res.send('Updated');

});

app.delete('/delete', (req, res) => {

    res.send('Deleted');

});

app.all('/all', (req, res) => {

    res.send('All HTTP methods - ' + req.method);

});

app.get('*', (req, res) => {

    res.status(404)
        .send('Page not found');
});

const port = 3000;

app.listen(port, (err) => {

    console.log(err ? err : 'Server listening on port ' + port + '...');

});