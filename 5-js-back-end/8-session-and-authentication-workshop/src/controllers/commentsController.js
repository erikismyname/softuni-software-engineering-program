module.exports = {

    postComment: async (req, res) => {

        const creatorId = req.user._id;

        const cubeId = req.params.cubeId;

        const comment = {
            author: creatorId,
            content: req.body.content,
        };

        try {

            await req.storage.createComment(cubeId, comment);

            res.redirect(`/products/details/${cubeId}`);

        } catch (err) {

            console.log(err.message);

        }

    },

};