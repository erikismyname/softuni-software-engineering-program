const User = require('../models/User.js');

async function createUser(email, username, hashedPassword) {

    const newUser = new User({
        email,
        username,
        hashedPassword,
    });

    await newUser.save();

    return newUser;

}

async function getUserByUsername(username) {

    const usernamePattern = new RegExp(`^${username}$`, 'i');

    return User
        .findOne({ username: { $regex: usernamePattern } })
        .populate('bookedHotels')
        .lean();

}

async function getUserByEmail(email) {

    const emailPattern = new RegExp(`^${email}$`, 'i');

    return User.findOne({ email: { $regex: emailPattern } });

}

module.exports = {
    createUser,
    getUserByUsername,
    getUserByEmail,
};