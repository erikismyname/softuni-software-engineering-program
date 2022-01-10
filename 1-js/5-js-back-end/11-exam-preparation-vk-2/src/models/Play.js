const { Schema, model } = require('mongoose');

const playSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        maxlength: 50,
    },
    imageUrl: {
        type: String,
        required: [true, 'Image URL is required!'],
    },
    isPublic: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date || String,
        required: true,
    },
    usersLiked: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    author: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Play = model('Play', playSchema);

module.exports = Play;