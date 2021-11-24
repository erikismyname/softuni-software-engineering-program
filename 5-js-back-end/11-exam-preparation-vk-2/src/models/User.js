const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    hashedPassword: {
        type: String,
        required: true,
    },
    likedPlays: [{ type: Schema.Types.ObjectId, ref: 'Play' }],
});

const User = model('User', userSchema);

module.exports = User;