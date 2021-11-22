const { Schema, model } = require('mongoose');

const hotelSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 4,
    },
    city: {
        type: String,
        required: true,
        minLength: 3,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?:\/\//,
    },
    rooms: {
        type: Number,
        required: true,
        min: 1,
        max: 100,
    },
    bookedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Hotel = model('Hotel', hotelSchema);

module.exports = Hotel;