function preloadCube() {

    return async (req, res, next) => {

        req.data = req.data || {};

        try {

            const cube = await req.storage.getOneCube(req.params.cubeId);

            if (cube) {

                req.data.cube = cube;

            }

        } catch (err) {

            console.log(err.message);

        }

        next();

    };

}

module.exports = { preloadCube };