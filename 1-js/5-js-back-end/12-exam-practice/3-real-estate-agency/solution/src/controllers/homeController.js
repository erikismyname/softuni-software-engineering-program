const router = require('express').Router();

router.get('/', async (req, res) => {

    const ctx = {
        title: 'Home',
    };

    try {

        const housing = await req.storage.getLastThreeOffers();

        ctx.housing = housing;

    } catch (err) {

        console.log(err);

        ctx.errors = ['Could not load housing offers!'];

    }

    res.render('home/home', ctx);

});

module.exports = router;