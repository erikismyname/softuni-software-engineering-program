const router = require('express').Router();

router.get('/', async (req, res) => {

    try {

        const plays = await req.storage.getAllPlays(req.query.orderBy);

        const ctx = {
            title: 'Home',
            plays
        };

        res.render('home', ctx);

    } catch (err) {

        console.log(err);

    }

});

module.exports = router;