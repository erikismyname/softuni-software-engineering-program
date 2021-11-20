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

        try {

            await req.storage.createCube(cube);

            res.redirect('/');

        } catch (err) {

            if (err.name == 'ValidationError') {

                res.render('create', { title: 'Create', error: 'All fields are required' });
                
            }
            
            console.log(err.message);

        }

    },

};