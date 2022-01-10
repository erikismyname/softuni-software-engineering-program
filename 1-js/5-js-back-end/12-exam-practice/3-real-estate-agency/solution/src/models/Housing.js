const { Schema, model } = require('mongoose');

const housingSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minlength: [6, 'Name must be at least 6 characters long!'],
    },
    type: {
        type: String,
        required: [true, 'Type is required!'],
        enum: {
            values: ['Apartment', 'Villa', 'House'],
            message: 'Invalid housing type. It must be an Apartment, a Villa or a House!',
        },
    },
    year: {
        type: Number,
        required: [true, 'Year is required!'],
        min: [1850, 'Year must be between 1850 and 2021!'],
        max: [2021, 'Year must be between 1850 and 2021!'],
    },
    city: {
        type: String,
        required: [true, 'City is required!'],
        minlength: [4, 'City must be at least 4 characters long!'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Image URL is required!'],
        validate: {
            validator: function (v) {
                return /^https?:\/\//.test(v);
            },
            message: 'Image URL must be a valid one!',
        }
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        maxlength: [60, 'Max description length must be 60 words!'],
    },
    rooms: {
        type: Number,
        required: [true, 'Rooms is required'],
        min: [0, 'Rooms must be between 0 and 10!'],
        max: [10, 'Rooms must be between 0 and 10!'],
    },
    rentedBy: [{
        type: Schema.Types.ObjectId, ref: 'User',
    }],
    owner: [{
        type: Schema.Types.ObjectId, ref: 'User',
    }],
});

const Housing = model('Housing', housingSchema);

module.exports = Housing;