const { Schema, model } = require('mongoose');

const hotelSchema = new Schema({
    name: {
        type: String,
    },
    city: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    rooms: {
        type: Number,
    },
    bookedBy: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Hotel = model('Hotel', hotelSchema);

module.exports = Hotel;