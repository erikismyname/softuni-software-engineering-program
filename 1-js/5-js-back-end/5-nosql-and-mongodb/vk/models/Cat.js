const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 10,
        enum: {
            values: ['Toby'],
            message: 'Invalid name',
        },
    },
    age: {
        type: Number,
        required: true,
        min: [1, 'Age should be >= 1'],
        max: [100, 'Age should be <= 100'],
    },
});

// catSchema.path('age').validate(function () {
//     return age >= 1 && age <= 100
// }, 'Invalid age!');

// catSchema.methods.sayHi = function () {
//     return `I am ${this.name} and I am ${this.age} years old.`;
// }

// catSchema.virtual('isBaby').get(function () {
//     return this.age <= 1;
// }); 

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;