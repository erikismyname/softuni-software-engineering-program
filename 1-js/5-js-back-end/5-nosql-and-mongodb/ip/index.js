const mongoose = require('mongoose');

const User = require('./models/User.js');

startApp();

async function startApp() {

    await connectDb();

    // findUsers();

    // createUsers();

    // findUser();

    // updateUser();

    // deleteUser();

    query();

}

async function connectDb() {

    const uri = 'mongodb://localhost:27017/demo-db';

    try {

        await mongoose.connect(uri);

        console.log('DB connected!');

    } catch (err) {

        console.error(err);

    }

}

async function createUsers() {

    const tom = new User({
        name: 'Tom',
        age: 20,
    });

    await tom.save();

    console.log('Tom saved in DB!');

    await User.create({
        name: 'Toby',
        age: 11,
    });

    console.log('Toby saved in DB!');

}

async function findUsers() {

    const users = await User.find();

    users.forEach(u => console.log(u.greet() + ' - ' + u.isTeenager));

}

async function findUser() {

    const user = await User.findOne({ age: 10 });

    console.log('>>>', user);

}

async function updateUser() {

    const updatedUser = await User.updateOne({ name: 'Kire' }, { $set: { name: 'Erik', age: 24 } });

    console.log(updatedUser);

}

async function deleteUser() {

    const deletedUser = await User.deleteOne({name: 'Erik'});

    console.log(deletedUser);

}

async function query() {

    const user = await User
        .where('age').gt(10);

    console.log(user);

}