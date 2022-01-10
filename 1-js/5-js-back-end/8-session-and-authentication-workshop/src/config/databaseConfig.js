const mongoose = require('mongoose');

module.exports = async () => {

    try {

        await mongoose.connect('mongodb://localhost:27017/demo-db');

        console.log('Db connected!');

    } catch (err) {

        console.log(err.message);

    }

};