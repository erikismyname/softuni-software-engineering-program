const expressRouter = require('express').Router();

expressRouter.get('/create', (req, res) => {

    res.render('createAccessory', {title: 'Accessory Create'});

});

expressRouter.post('/create', async (req, res) => {

    const accessory = {
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
    };

    try {

        await req.storage.createAccessory(accessory);

        res.redirect('/');

    } catch (err) {

        console.log(err.message);

    }

});

module.exports = expressRouter;