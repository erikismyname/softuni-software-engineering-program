const router = require('express').Router();

router.get('/', async (req, res) => {

    const ctx = {
        title: 'Home',
    };

    try {

        const hotels = await req.storage.getAllHotels();

        ctx.hotels = hotels;

        res.render('home/home', ctx);

    } catch (err) {

        console.log(err);

        ctx.errors = err.message;

        res.render('home/home', ctx);

    }

});

module.exports = router;