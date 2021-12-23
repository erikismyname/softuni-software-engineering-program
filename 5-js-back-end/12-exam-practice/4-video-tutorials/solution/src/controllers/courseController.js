const router = require('express').Router();
const { body, validationResult } = require('express-validator');

const { isUser } = require('../middlewares/guardsMiddlewares.js');

router.get('/create', isUser(), (req, res) => {

    res.render('course/create', { title: 'Create' });

});

router.post('/create',

    isUser(),

    body('title')
        .trim()
        .notEmpty()
        .withMessage('Title is required!')
        .bail()
        .isLength({ min: 4 })
        .withMessage('Title must be at least 4 characters long!'),

    body('description')
        .trim()
        .notEmpty()
        .withMessage('Description is required!')
        .bail()
        .isLength({ min: 20 })
        .withMessage('Description must be at least 20 characters long!'),

    body('imageUrl')
        .trim()
        .notEmpty()
        .withMessage('Image URL is required!')
        .bail()
        .matches('^https?:\/\/')
        .withMessage('Image URL must be a valid one!'),

    async (req, res) => {

        const courseData = {
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            isPublic: Boolean(req.body.isPublic),
            createdAt: new Date(),
            author: req.user._id,
        };

        const errors = validationResult(req)
            .array()
            .map(e => e.msg);

        try {

            if (errors.length) {

                const error = new Error('Error when validating create course data!');

                error.type = 'Validation';

                throw error;

            }

            await req.storage.createCourse(courseData);

            res.redirect('/');

        } catch (err) {

            console.log(err);

            const ctx = {
                title: 'Create',
                errors: err.type == 'Validation' ? errors : [err.message],
                courseData,
            };

            res.render('course/create', ctx);

        }

    }

);

router.get('/details/:courseId', async (req, res) => {

    const courseId = req.params.courseId;

    const userId = req.user?._id;

    try {

        const course = await req.storage.getCourseById(courseId);

        course.isAuthor = course.author == userId;

        course.isEnrolled = course.usersEnrolled.find(x => x == userId);

        const ctx = {
            title: 'Details',
            course,
        };

        res.render('course/details', ctx);

    } catch (err) {

        console.log(err);

        res.redirect('/');

    }

});

router.get('/enroll/:courseId', isUser(), async (req, res) => {

    const courseId = req.params.courseId;

    const userId = req.user._id;

    try {

        const course = await req.storage.getCourseById(courseId);

        if (course.author == userId) {

            throw new Error('Course creator cannot enroll in his/her own course!');

        } else if (course.usersEnrolled.find(x => x == userId)) {

            throw new Error('You have already enrolled in the course!');

        }

        await req.storage.enrollInCourse(courseId, userId);

        res.redirect('/courses/details/' + courseId);

    } catch (err) {

        console.log(err);

        res.redirect('/');

    }

});

router.get('/delete/:courseId', isUser(), async (req, res) => {

    const courseId = req.params.courseId;

    try {

        const course = await req.storage.getCourseById(courseId);

        if (course.author != req.user._id) {

            throw new Error('Only course creator can delete it!');

        }

        await req.storage.deleteCourse(courseId);

        res.redirect('/');

    } catch (err) {

        console.log(err);

        res.redirect('/');

    }

});

router.get('/edit/:courseId', isUser(), async (req, res) => {

    const courseId = req.params.courseId;

    try {

        const course = await req.storage.getCourseById(courseId);

        if (course.author != req.user._id) {

            throw new Error('Only course creator can edit it!');

        }

        const ctx = {
            title: 'Edit',
            course,
        };

        res.render('course/edit', ctx);

    } catch (err) {

        console.log(err);

        res.redirect('/');

    }

});

router.post('/edit/:courseId',

    isUser(),

    body('title')
        .trim()
        .notEmpty()
        .withMessage('Title is required!')
        .bail()
        .isLength({ min: 4 })
        .withMessage('Title must be at least 4 characters long!'),

    body('description')
        .trim()
        .notEmpty()
        .withMessage('Description is required!')
        .bail()
        .isLength({ min: 20 })
        .withMessage('Description must be at least 20 characters long!'),

    body('imageUrl')
        .trim()
        .notEmpty()
        .withMessage('Image URL is required!')
        .bail()
        .matches('^https?:\/\/')
        .withMessage('Image URL must be a valid one!'),

    async (req, res) => {

        const courseId = req.params.courseId;

        const courseData = {
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            isPublic: Boolean(req.body.isPublic),
        };

        const errors = validationResult(req)
            .array()
            .map(e => e.msg);

        try {

            const course = await req.storage.getCourseById(courseId);

            if (course.author != req.user._id) {

                throw new Error('Only course creator can edit it!');

            } else if (errors.length) {

                const error = new Error('Error when validation edit course data!');

                error.type = 'Validation';

                throw error;

            }

            await req.storage.editCourse(courseId, courseData)

            res.redirect('/courses/details/' + courseId);

        } catch (err) {

            console.log(err);

            const ctx = {
                title: 'Edit',
                course: Object.assign({}, courseData, { _id: courseId }),
                errors: err.type == 'Validation' ? errors : [err.message],
            };

            res.render('course/edit', ctx);

        }

    }

);

module.exports = router;