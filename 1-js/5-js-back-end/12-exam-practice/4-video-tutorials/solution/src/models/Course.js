const { Schema, model } = require('mongoose');

const courseSchema = new Schema({
    title: { type: String },
    description: { type: String },
    imageUrl: { type: String },
    isPublic: { type: Boolean, default: false },
    createdAt: { type: Date },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    usersEnrolled: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

const Course = model('Course', courseSchema);

module.exports = Course;