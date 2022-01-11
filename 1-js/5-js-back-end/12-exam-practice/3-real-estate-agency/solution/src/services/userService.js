const User = require('../models/User.js');

async function createUser(name, username, hashedPassword) {

    const newUser = new User({
        name,
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

module.exports = {
    createUser,
    getUserByUsername,
};