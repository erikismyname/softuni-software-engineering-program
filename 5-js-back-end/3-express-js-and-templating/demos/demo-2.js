const express = require('express');
const hbs = require('express-handlebars');

const app = express();

// app.use(express.static('static')); 

app.engine('hbs', hbs({

    extname: '.hbs',

}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    const ctx = {
        title: 'Home page',
        name: 'Peter',
        age: 20,
        work: {
            position: 'engineer',
        },
        items: [
            'lint',
            'bubblegum',
            'coins',
        ],
        user: {
            username: 'Erik',
        }
    };

    res.render('home', ctx);

});

const port = 3000;

app.listen(port, (err) => {

    console.log(err ? err : `Server listening on port ${port}...`);

});