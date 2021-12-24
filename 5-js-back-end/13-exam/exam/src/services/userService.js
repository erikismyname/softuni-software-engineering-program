const User = require('../models/User.js');

async function createUser(firstName, lastName, email, hashedPassword) {

    const newUser = new User({
        firstName,
        lastName,
        email,
        hashedPassword,
    });

    await newUser.save();

    return newUser;

}

async function getUserByEmail(email) {

    const emailPattern = new RegExp(`^${email}$`, 'i');

    return User.findOne({ email: { $regex: emailPattern } });

}

module.exports = {
    createUser,
    getUserByEmail,
};