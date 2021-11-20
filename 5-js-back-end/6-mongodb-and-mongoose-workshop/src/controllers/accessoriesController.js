module.exports = {

    getAccessory: (req, res) => {

        res.render('createAccessory');

    },

    postAccessory: async (req, res) => {

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

    },

};