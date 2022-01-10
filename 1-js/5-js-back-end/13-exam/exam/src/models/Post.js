const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    title: { type: String },
    keyword: { type: String },
    location: { type: String },
    dateOfCreation: { type: String },
    imageUrl: { type: String },
    description: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    votes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    rating: { type: Number, dafault: 0 },
});

const Post = model('Post', postSchema);

module.exports = Post;