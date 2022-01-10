const router = require('express').Router();
const { body, validationResult } = require('express-validator');

const { isUser } = require('../middlewares/guardsMiddlewares.js');

router.get('/catalog', async (req, res) => {

    try {

        const posts = await req.storage.getAllPosts();

        const ctx = {
            title: 'Catalog',
            posts,
        };

        res.render('post/catalog', ctx);

    } catch (err) {

        console.log(err.message);

        res.render.redirect('/');

    }

});

router.get('/create', isUser(), (req, res) => {

    res.render('post/create', { title: 'Create' });

});

router.post('/create',

    isUser(),

    body('title')
        .trim()
        .notEmpty()
        .withMessage('Title is required!')
        .bail()
        .isLength({ min: 6 })
        .withMessage('Title must be at least 6 characters long!'),

    body('keyword')
        .trim()
        .notEmpty()
        .withMessage('Keyword is required')
        .bail()
        .isLength({ min: 6 })
        .withMessage('Keyword must be at least 6 characters long!'),

    body('location')
        .trim()
        .notEmpty()
        .withMessage('Location is required!')
        .bail()
        .isLength({ max: 10 })
        .withMessage('Location must be maximum 10 characters long!'),

    body('date')
        .trim()
        .notEmpty()
        .withMessage('Date is required!')
        .bail()
        .matches('^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$')
        .withMessage('Date must be in the format specified!'),

    body('imageUrl')
        .trim()
        .notEmpty()
        .withMessage('Image URL is required!')
        .bail()
        .matches('^https?:\/\/')
        .withMessage('Image URL must be a valid one!'),

    body('description')
        .trim()
        .notEmpty()
        .withMessage('Description is required!')
        .bail()
        .isLength({ min: 8 })
        .withMessage('Description must be at least 8 characters long!'),


    async (req, res) => {

        const postData = {
            title: req.body.title,
            keyword: req.body.keyword,
            location: req.body.location,
            dateOfCreation: req.body.date,
            imageUrl: req.body.imageUrl,
            description: req.body.description,
            author: req.user._id,
            rating: 0,
        };

        const errors = validationResult(req)
            .array()
            .map(e => e.msg);

        try {

            if (errors.length) {

                const error = new Error('Error when validating crate post data!');

                error.type = 'Validation';

                throw error;

            }

            const post = await req.storage.createPost(postData);

            const user = await req.auth.getUserByEmail(req.user.email);

            user.myPosts.push(post._id);

            await user.save();

            res.redirect('/posts/catalog');

        } catch (err) {

            console.log(err.message);

            const ctx = {
                title: 'Create',
                errors: err.type == 'Validation' ? errors : [err.message],
                postData,
            };

            res.render('post/create', ctx);

        }

    }

);

router.get('/details/:postId', async (req, res) => {

    const postId = req.params.postId;

    const userId = req.user?._id;

    try {

        const post = await req.storage.getPostById(postId);

        post.isCreator = post.author == userId;

        post.hasVoted = post.votes.find(x => x._id == userId);

        post.voted = post.votes.map(x => x.email).join(', ');

        const ctx = {
            title: 'Details',
            post,
        };

        res.render('post/details', ctx);

    } catch (err) {

        console.log(err);

        res.redirect('/');

    }

});

router.get('/upvote/:postId', isUser(), async (req, res) => {

    const postId = req.params.postId;

    const userId = req.user._id;

    try {

        const post = await req.storage.getPostById(postId);

        if (post.author._id == userId) {

            throw new Error('Post creator cannot vote for his own post!');

        } else if (post.votes.find(x => x._id == userId)) {

            throw new Error('You cannot vote for a post more than once!');

        }

        await req.storage.upvotePost(postId, userId);

        res.redirect('/posts/details/' + postId);

    } catch (err) {

        console.log(err.message);

        res.redirect('/');

    }

});

router.get('/downvote/:postId', isUser(), async (req, res) => {

    const postId = req.params.postId;

    const userId = req.user._id;

    try {

        const post = await req.storage.getPostById(postId);

        if (post.author._id == userId) {

            throw new Error('Post creator cannot vote for his own post!');

        } else if (post.votes.find(x => x._id == userId)) {

            throw new Error('You cannot vote for a post more than once!');

        }

        await req.storage.downvotePost(postId, userId);

        res.redirect('/posts/details/' + postId);

    } catch (err) {

        console.log(err.message);

        res.redirect('/');

    }

});

router.get('/delete/:postId', isUser(), async (req, res) => {

    const postId = req.params.postId;

    try {

        const post = await req.storage.getPostById(postId);

        if (post.author != req.user._id) {

            throw new Error('Only post creator can delete it!');

        }

        await req.storage.deletePost(postId);

        res.redirect('/posts/catalog');

    } catch (err) {

        console.log(err.message);

        res.redirect('/');

    }

});

router.get('/edit/:postId', isUser(), async (req, res) => {

    const postId = req.params.postId;

    try {

        const postData = await req.storage.getPostById(postId);

        if (postData.author != req.user._id) {

            throw new Error('Only post creator can edit it!');

        }

        const ctx = {
            title: 'Edit',
            postData
        };

        res.render('post/edit', ctx);

    } catch (err) {

        console.log(err.message);

        res.redirect('/');

    }

});

router.post('/edit/:postId',

    isUser(),

    body('title')
        .trim()
        .notEmpty()
        .withMessage('Title is required!')
        .bail()
        .isLength({ min: 6 })
        .withMessage('Title must be at least 6 characters long!'),

    body('keyword')
        .trim()
        .notEmpty()
        .withMessage('Keyword is required')
        .bail()
        .isLength({ min: 6 })
        .withMessage('Keyword must be at least 6 characters long!'),

    body('location')
        .trim()
        .notEmpty()
        .withMessage('Location is required!')
        .bail()
        .isLength({ max: 10 })
        .withMessage('Location must be maximum 10 characters long!'),

    body('date')
        .trim()
        .notEmpty()
        .withMessage('Date is required!')
        .bail()
        .matches('^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$')
        .withMessage('Date must be in the format specified!'),

    body('imageUrl')
        .trim()
        .notEmpty()
        .withMessage('Image URL is required!')
        .bail()
        .matches('^https?:\/\/')
        .withMessage('Image URL must be a valid one!'),

    body('description')
        .trim()
        .notEmpty()
        .withMessage('Description is required!')
        .bail()
        .isLength({ min: 8 })
        .withMessage('Description must be at least 8 characters long!'),


    async (req, res) => {

        const postId = req.params.postId;

        const postData = {
            title: req.body.title,
            keyword: req.body.keyword,
            location: req.body.location,
            dateOfCreation: req.body.date,
            imageUrl: req.body.imageUrl,
            description: req.body.description,
        };

        const errors = validationResult(req)
            .array()
            .map(e => e.msg);

        try {

            const post = await req.storage.getPostById(postId);

            if (post.author != req.user._id) {

                throw new Error('Only post creator can edit it!');

            } else if (errors.length) {

                const error = new Error('Error when validating edit post data!');

                error.type = 'Validation';

                throw error;

            }

            await req.storage.editPost(postId, postData);

            res.redirect('/posts/details/' + postId);

        } catch (err) {

            console.log(err.message);

            const ctx = {
                title: 'Edit',
                errors: err.type == 'Validation' ? errors : [err.message],
                postData: Object.assign({}, postData, { _id: postId }),
            };

            res.render('post/edit', ctx);

        }

    }

);

router.get('/my-posts', isUser(), async (req, res) => {

    try {

        const posts = await req.storage.getMyPosts(req.user._id);

        const ctx = {
            title: 'My Posts',
            posts,
        };

        res.render('post/my-posts', ctx)

    } catch (err) {

        console.log(err.messsage);

        res.redirect('/');

    }

});

module.exports = router;