const mongoose = require('mongoose');

const Cat = require('./models/Cat.js');

startApp();

async function startApp() {

    await connectToDb();

    // await createCat();

    // await getOneCat();

    await getAllCats();

    // await updateCat();

    // await deleteCat();

    // await filterAndSortCats();

}

async function connectToDb() {

    const connStr = 'mongodb://localhost:27017/demo-db';

    try {

        await mongoose.connect(connStr);

        console.log('Db connected!');

    } catch (err) {

        console.log('Db error: ', err);

    }

}

async function createCat() {

    const cat = new Cat({
        name: 'Tom',
        age: 1,
    });

    try {

        const creationData = await cat.save();

        // await Cat.create({
        //     name: 'Joe',
        //     age: 2,
        // });

        console.log('Record created');

    } catch (err) {

        console.log('Db error: ', err.message);

    }

}

async function getOneCat() {

    try {

        const cat = await Cat.findOne({ age: 1 });

        console.log(cat);

    } catch (err) {

        console.log('Db error: ', err);

    }

}

async function getAllCats() {

    try {

        const cats = await Cat
            .find()
            .sort({ age: 1 });

        console.log(cats);

        // cats.forEach(c => console.log(c.sayHi() + ' - ' + c.isBaby));

    } catch (err) {

        console.log('Error:', err);

    }

}

async function updateCat() {

    try {

        const updateResult = await Cat.updateOne({ age: 2 }, { $set: { age: 3 } });

        console.log('Update successful -> ', updateResult);

    } catch (err) {

        console.log('Error: ', err);

    }

}

async function deleteCat() {

    try {

        const deleteResult = await Cat.deleteOne({ name: 'Tom' });

        console.log('Deleted -> ', deleteResult);

    } catch (err) {

        console.log('Error: ', err);

    }

}

async function filterAndSortCats() {

    try {

        // const cats = await Cat.find({
        //     $or: [
        //         { name: 'Oleg' },
        //         { age: 1 },
        //     ]
        // });

        const cats = await Cat
            .where('name').equals('Tom')

        console.log(cats);

    } catch (err) {

        console.log(err.message);

    }

}