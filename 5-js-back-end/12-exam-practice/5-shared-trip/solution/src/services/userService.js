const User = require('../models/User.js');

async function createUser(email, hashedPassword, gender) {

    const newUser = new User({
        email,
        hashedPassword,
        gender,
    });

    await newUser.save();

    return newUser;

}

async function getUserByEmail(email) {

    const emailPattern = new RegExp(`^${email}$`, 'i');

    return User
        .findOne({ email: { $regex: emailPattern } })
        .populate('tripsHistory')
        .lean();

}

async function getUserById(userId) {

    return User.findById(userId);

}

module.exports = {
    createUser,
    getUserByEmail,
    getUserById,
};