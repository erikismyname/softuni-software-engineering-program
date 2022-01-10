module.exports = {

    getCatalog: async (req, res) => {

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

    },

};