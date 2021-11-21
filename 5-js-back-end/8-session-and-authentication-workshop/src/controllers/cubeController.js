const expressRouter = require('express').Router();

const { isAuth, isOwner } = require('../middlewares/guards.js');
const { preloadCube } = require('../middlewares/preload.js');

expressRouter.get('/', async (req, res) => {

    const query = req.query;

    const cubes = await req.storage.getCubes(query);

    const ctx = {
        title: 'Catalog',
        cubes,
        search: query.search,
        from: query.from,
        to: query.to,
    };

    res.render('catalog', ctx);

});

expressRouter.get('/create', isAuth(), (req, res) => {

    res.render('create', { title: 'Cube Create' });

});

expressRouter.post('/create', isAuth(), async (req, res) => {

    const cube = {
        name: req.body.name.trim(),
        description: req.body.description.trim(),
        imageUrl: req.body.imageUrl.trim(),
        difficulty: Number(req.body.difficulty),
        creator: req.user._id,
    };

    try {

        await req.storage.createCube(cube);

        res.redirect('/');

    } catch (err) {

        if (err.name == 'ValidationError') {

            res.render('create', { title: 'Cube Create', error: 'All fields are required' });

        }

        console.log(err.message);

    }

});

expressRouter.get('/details/:cubeId', preloadCube(), async (req, res) => {

    const cube = req.data.cube;

    try {

        if (!cube) {

            res.redirect('/404');

        } else {

            cube.isOwner = req.user && (cube.creatorId == req.user._id);

            const ctx = {
                title: 'Details',
                cube,
            };

            res.render('details', ctx);

        }

    } catch (err) {

        console.log(err.message);

    }

});

expressRouter.get('/edit/:cubeId', preloadCube(), isOwner(), async (req, res) => {

    try {

        const cube = req.data.cube;

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

    } catch (err) {

        console.log(err.message);

    }

});

expressRouter.post('/edit/:cubeId', preloadCube(), isOwner(), async (req, res) => {

    const cubeId = req.params.cubeId;

    const cube = {
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        difficulty: Number(req.body.difficulty),
    };

    try {

        await req.storage.editCube(cubeId, cube);

        res.redirect(`/products/details/${cubeId}`);

    } catch (err) {

        console.error(err);

    }

});

expressRouter.get('/attach/:cubeId', async (req, res) => {

    try {

        const cubeId = req.params.cubeId;

        const cube = await req.storage.getOneCube(cubeId);

        const accessories = await req.storage.getAllAccessories((cube.accessories || []).map(a => a._id));

        res.render('attachAccessory', {
            title: 'Attach Accessory',
            cube,
            accessories,
        });

    } catch (err) {

        console.log(err.massage);

    }

});

expressRouter.post('/attach/:cubeId', async (req, res) => {

    const cubeId = req.params.cubeId;

    const stickerId = req.body.accessory;

    try {

        await req.storage.attachSticker(cubeId, stickerId);

        res.redirect(`/details/${cubeId}`);

    } catch (err) {

        console.log(err);

    }

});

module.exports = expressRouter;