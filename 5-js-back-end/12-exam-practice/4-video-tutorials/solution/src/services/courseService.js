const Course = require('../models/Course.js');
const User = require('../models/User.js');

async function getAllPublicCourses() {

    return Course
        .find({ isPublic: true })
        .lean();

}

async function createCourse(courseData) {

    const newCourse = new Course(courseData);

    return newCourse.save();

}

async function getCourseById(courseId) {

    return Course
        .findById(courseId)
        .lean();

}

async function enrollInCourse(courseId, userId) {

    const [course, user] = await Promise.all([
        Course.findById(courseId),
        User.findById(userId),
    ]);

    course.usersEnrolled.push(userId);

    user.enrolledCourses.push(courseId);

    return Promise.all([
        course.save(),
        user.save(),
    ]);

}

async function deleteCourse(courseId) {

    return Course.findByIdAndDelete(courseId);

}

async function editCourse(courseId, courseData) {

    return Course.findByIdAndUpdate(courseId, courseData);

}

module.exports = {
    getAllPublicCourses,
    createCourse,
    getCourseById,
    enrollInCourse,
    deleteCourse,
    editCourse,
};