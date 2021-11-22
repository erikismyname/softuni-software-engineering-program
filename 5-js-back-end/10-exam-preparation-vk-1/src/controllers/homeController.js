const router = require('express').Router();

router.get('/', async (req, res) => {

    try {

        const hotels = await req.storage.getAllHotels();

        const ctx = {
            title: 'Catalog',
            hotels,
        };

        res.render('home/home', ctx);

    } catch (err) {

        console.log(err);

    }

});

module.exports = router;