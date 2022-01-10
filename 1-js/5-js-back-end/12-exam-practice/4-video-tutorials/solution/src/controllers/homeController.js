const router = require('express').Router();

router.get('/', async (req, res) => {

    const ctx = {
        title: 'Home',
    };

    try {

        const courses = await req.storage.getAllPublicCourses();

        ctx.courses = courses;

    } catch (err) {

        console.log(err);

        ctx.errors = ['Could not load courses!'];

    }

    res.render('home/home', ctx);

});

module.exports = router;