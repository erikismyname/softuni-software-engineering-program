module.exports = {

    getCreate: (req, res) => {

        res.render('create', { title: 'Create' });

    },

    postCreate: async (req, res) => {

        const cube = {
            name: req.body.name.trim(),
            description: req.body.description.trim(),
            imageUrl: req.body.imageUrl.trim(),
            difficulty: Number(req.body.difficulty),
        };

        if (cube.name && cube.description &&  cube.imageUrl) {

            await req.storage.createCube(cube);

            res.redirect('/');
            
        }

    },

};