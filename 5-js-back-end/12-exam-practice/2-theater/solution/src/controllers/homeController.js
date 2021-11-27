const router = require('express').Router();

router.get('/', async (req, res) => {

    const query = req.query.orderBy;

    let plays;

    let templatePath;

    try {

        if (req.user) {

            plays = await req.storage.getPlaysForUser(query);

            templatePath = 'home/user';

        } else {

            plays = await req.storage.getPlaysForGuest();

            templatePath = 'home/guest';

        }

        const ctx = {
            title: 'Home',
            plays,
        };

        res.render(templatePath, ctx);

    } catch (err) {

        console.log(err);

    }

});

module.exports = router;