const { MongoClient } = require('mongodb');

const connStr = 'mongodb://localhost:27017';

const client = new MongoClient(connStr);

client.connect((err) => {

    if (err) {

        console.log(err);

        return;

    }

    console.log('DB connected');

    const db = client.db('demo-db');

    const collection = db.collection('users');

    collection.find({}).toArray((err, data) => {

        if (err) {

            console.log(err);

            return;

        }

        console.log(data);

    });

    collection.insertOne({name: 'Dom', age: 3}, (err) => {

        if (err) {

            console.log(err);

            return;

        }

    });

    collection.deleteOne({name: 'Dom', age: 3}, (err) => {

        if (err) {

            console.log(err);

            return;

        }

    });

    collection.updateOne({ name: 'Dom' }, { $set: { name: 'Dim' } }, (err) => {

        if (err) {

            console.log(err);

            return;

        }

    });

});