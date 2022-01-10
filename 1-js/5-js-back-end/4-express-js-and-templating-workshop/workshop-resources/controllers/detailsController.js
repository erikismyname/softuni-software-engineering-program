module.exports = {

    getDetails: async (req, res) => {

        const cubeId = req.params.id;

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

    },

};