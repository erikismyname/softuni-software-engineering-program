const mongoose = require('mongoose');

const { DB_CONNECTION_STRING } = require('../config/constantsConfig.js');

module.exports = async () => {
    try {
        await mongoose.connect(DB_CONNECTION_STRING);
        console.log('DB successfully connected!');
    } catch (err) {
        console.log('A db connection error occurred: ', err);
    }
};