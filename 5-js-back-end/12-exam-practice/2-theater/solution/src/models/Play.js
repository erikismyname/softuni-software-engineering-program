const { Schema, model } = require('mongoose');

const playSchema = new Schema({
    title: { type: String },
    description: { type: String },
    imageUrl: { type: String },
    isPublic: {
        type: Boolean,
        default: false,
    },
    createdAt: { type: Date },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    usersLiked: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

const Play = model('Play', playSchema);

module.exports = Play;