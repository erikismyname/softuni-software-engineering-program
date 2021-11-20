module.exports = {

    getDetails: async (req, res) => {

        const cubeId = req.params.id;

        try {

            const cube = await req.storage.getOneCube(cubeId);

            if (!cube) {

                res.redirect('/404');

            } else {

                const ctx = {
                    title: 'Details',
                    cube,
                };

                res.render('details', ctx);

            }

        } catch (err) {

            console.log(err.message);

        }

    },

    getAttachAccessory: async (req, res) => {

        try {

            const cubeId = req.params.id;

            const cube = await req.storage.getOneCube(cubeId);

            const accessories = await req.storage.getAllAccessories((cube.accessories || []).map(a => a._id));

            res.render('attachAccessory', {
                title: 'Attach Accessories',
                cube,
                accessories,
            });

        } catch (err) {

            console.log(err.massage);

        }

    },

    postAttachAccessory: async (req, res) => {

        const cubeId = req.params.id;

        const stickerId = req.body.accessory;

        try {

            await req.storage.attachSticker(cubeId, stickerId);

            res.redirect(`/details/${cubeId}`);

        } catch (err) {

            console.log(err);

        }

    },

};