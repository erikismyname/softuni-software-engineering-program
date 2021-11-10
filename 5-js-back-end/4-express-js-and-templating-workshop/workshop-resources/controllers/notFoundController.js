module.exports = {

    getNotFound: (req, res) => {

        res.render('404', {title: 'Not Found'});

    },

};