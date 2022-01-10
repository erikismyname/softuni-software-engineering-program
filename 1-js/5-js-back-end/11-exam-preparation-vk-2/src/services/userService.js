const User = require('../models/User.js');

async function createUser(username, hashedPassword) {

    const newUser = new User({
        username,
        hashedPassword,
        likedPlays: [],
    });

    await newUser.save();

    return newUser;

}

async function getUserByUsername(username) {

    const usernamePattern = new RegExp(`^${username}$`, 'i');

    return await User.findOne({ username: { $regex: usernamePattern } });

}

module.exports = {
    createUser,
    getUserByUsername,
};