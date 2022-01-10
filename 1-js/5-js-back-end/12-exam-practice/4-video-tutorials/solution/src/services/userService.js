const User = require('../models/User.js');

async function createUser(username, hashedPassword) {

    const newUser = new User({
        username,
        hashedPassword,
    });

    await newUser.save();

    return newUser;

}

async function getUserByUsername(username) {

    const usernamePattern = new RegExp(`^${username}$`, 'i');

    return User.findOne({ username: { $regex: usernamePattern } });

}

async function getUserById(userId) {

    return User
        .findById(userId)
        .populate('enrolledCourses')
        .lean();

}

module.exports = {
    createUser,
    getUserByUsername,
    getUserById,
};