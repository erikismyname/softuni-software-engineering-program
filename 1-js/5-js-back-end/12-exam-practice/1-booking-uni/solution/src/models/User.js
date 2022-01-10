const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
    },
    username: {
        type: String,
    },
    hashedPassword: {
        type: String,
    },
    bookedHotels: [{
        type: Schema.Types.ObjectId,
        ref: 'Hotel',
    }],
});

const User = model('User', userSchema);

module.exports = User;