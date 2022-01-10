const Post = require('../models/Post.js');
const User = require('../models/User.js');

async function getAllPosts() {

    return Post
        .find({})
        .lean();

}

async function createPost(postData) {

    return Post.create(postData);

}

async function getPostById(postId) {

    return Post
        .findById(postId)
        .populate('votes')
        .lean();

}

async function upvotePost(postId, userId) {

    const post = await Post.findById(postId);

    post.votes.push(userId);

    post.rating++;

    return post.save();

}

async function downvotePost(postId, userId) {

    const post = await Post.findById(postId);

    post.votes.push(userId);

    post.rating--;

    return post.save();

}

async function deletePost(postId) {

    return Post.findByIdAndDelete(postId);

}

async function editPost(postId, postData) {

    return Post.findByIdAndUpdate(postId, postData);

}

async function getMyPosts(userId) {

    return Post
        .find({ author: userId })
        .populate('author')
        .lean();

}

module.exports = {
    getAllPosts,
    createPost,
    getPostById,
    upvotePost,
    downvotePost,
    deletePost,
    editPost,
    getMyPosts,
};