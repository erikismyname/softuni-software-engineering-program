const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: { type: String },
    hashedPassword: { type: String },
    gender: { type: String },
    tripsHistory: [{ type: Schema.Types.ObjectId, ref: 'Trip' }],
});

const User = model('User', userSchema);

module.exports = User;