const mongoose = require('mongoose');

const { DB_CONNECTION_STRING } = require('./index.js');

module.exports = async () => {
    await mongoose.connect(DB_CONNECTION_STRING);
    console.log('DB is up and running...');
};