const router = require('express').Router();

router.get('/', (req, res) => {

    const ctx = {
        books: req.storage.getAllBooks(),
    };

    res.render('catalog', ctx);

});

router.get('/create', (req, res) => {

    res.render('create');

});

router.post('/create', (req, res) => {

    const bookData = req.body;

    if (bookData.name && bookData.author) {

        req.storage.createBook(bookData);

        res.redirect('/catalog');

    } else {

        res.send('Error!');

    }

});

module.exports = router;