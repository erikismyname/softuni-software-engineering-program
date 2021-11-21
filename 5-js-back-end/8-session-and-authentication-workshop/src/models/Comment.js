const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId, ref: 'User',
    },
    content: {
        type: String,
        required: true,
    },
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;