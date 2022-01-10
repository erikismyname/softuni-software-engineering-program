const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: { type: String },
    hashedPassword: { type: String },
    likedPlays: [{ type: Schema.Types.ObjectId, ref: 'Play' }],
});

const User = model('User', userSchema);

module.exports = User;