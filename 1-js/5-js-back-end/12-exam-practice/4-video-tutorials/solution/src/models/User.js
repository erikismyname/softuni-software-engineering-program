const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: { type: String },
    hashedPassword: { type: String },
    enrolledCourses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
});

const User = model('User', userSchema);

module.exports = User;