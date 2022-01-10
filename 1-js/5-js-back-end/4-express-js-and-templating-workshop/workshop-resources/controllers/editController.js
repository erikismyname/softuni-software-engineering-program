module.exports = {

    getEdit: async (req, res) => {

        const cubeId = req.params.id;

        const cube = await req.storage.getOneCube(cubeId);

        console.log('>>>', cube);

        if (cube) {
        
            cube[`select${cube.difficulty}`] = true;

            const ctx = {
                title: 'Edit',
                cube,
            };

            res.render('edit', ctx);

        } else {

            res.redirect('/404');

        }

    },

    postEdit: async (req, res) => {

        const cubeId = req.params.id;

        const cube = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            difficulty: Number(req.body.difficulty),
        };

        try {

            await req.storage.editCube(cubeId, cube);

            res.redirect(`/details/${cubeId}`);

        } catch (err) {

            console.error(err);

        }

    },

};