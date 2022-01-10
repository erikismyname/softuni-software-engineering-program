const mongoose = require('mongoose');

const { DB_CONNECTION_STRING } = require('../config');

module.exports = async () => {
    try {
        await mongoose.connect(DB_CONNECTION_STRING);
        console.log('DB is up and running...');
    } catch (err) {
        console.log(err);
    }
};