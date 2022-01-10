module.exports = {

    postComment: async (req, res) => {

        const cubeId = req.params.cubeId;

        const comment = {
            author: req.body.author,
            content: req.body.content,
        };

        try {

            await req.storage.createComment(cubeId, comment);

            res.redirect(`/details/${cubeId}`);

        } catch (err) {

            console.log(err.message);

        }

    },

};