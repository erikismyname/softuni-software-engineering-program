const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        required: false,
        min: 1,
        max: 50,
    },
});

// userSchema.methods.greet = function () {
//     return `I am ${this.name} and I am ${this.age}!`;
// };

userSchema.virtual('isTeenager')
    .get(function () {
        return this.age <= 18;
    });


userSchema.path('age').validate(function () {
    return this.age >= 1 && this.age <= 10
}, 'Ivalid age!');

const User = mongoose.model('User', userSchema);

module.exports = User;