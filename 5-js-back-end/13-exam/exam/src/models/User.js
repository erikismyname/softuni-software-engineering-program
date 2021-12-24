const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    firstName: { type: String },
    lastName: {type: String},
    email: {type: String},
    hashedPassword: { type: String },
    myPosts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
});

const User = model('User', userSchema);

module.exports = User;