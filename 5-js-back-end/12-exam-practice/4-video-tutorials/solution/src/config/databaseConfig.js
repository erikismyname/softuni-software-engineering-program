const mongoose = require('mongoose');

const { DB_CONNECTION_STRING } = require('./constantsConfig.js');

module.exports = () => mongoose.connect(DB_CONNECTION_STRING);