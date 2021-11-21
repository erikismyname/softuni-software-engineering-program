const { Schema, model } = require('mongoose');

const accessorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: 250,
    },
    imageUrl: {
        type: String,
        required: true,
        match: /^https?:\/\//,
    },
});

const Accessory = model('Accessory', accessorySchema);

module.exports = Accessory;