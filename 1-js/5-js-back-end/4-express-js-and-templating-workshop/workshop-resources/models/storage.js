const fs = require('fs/promises');
const uniqid = require('uniqid');

let data = {};

async function init() {

    try {

        data = JSON.parse(await fs.readFile('./models/data.json'));

    } catch (err) {

        console.error(err);

    }

    return (req, res, next) => {

        req.storage = {
            getCubes,
            getOneCube,
            createCube,
            editCube,
        };

        next();

    };

}

async function getCubes(query) {

    let cubes = Object
        .entries(data)
        .map(([id, v]) => Object.assign({}, { id }, v));

    if (query.search) {

        cubes = cubes.filter(c => c.name.toLowerCase().includes(query.search.toLowerCase()));

    }

    if (query.from) {

        cubes = cubes.filter(c => c.difficulty >= Number(query.from));

    }

    if (query.to) {

        cubes = cubes.filter(c => c.difficulty <= Number(query.to));

    }

    return cubes;

}

async function getOneCube(cubeId) {

    const cube = data[cubeId];

    return cube ? Object.assign({}, { cubeId }, cube) : undefined;

}

async function createCube(cube) {

    const id = uniqid();

    data[id] = cube;

    await saveData();

}

async function editCube(cubeId, cube) {

    if (!data[cubeId]) {

        throw new Error('No such ID in DB!');

    }

    data[cubeId] = cube;

    await saveData();

}

async function saveData() {

    try {

        await fs.writeFile('./models/data.json', JSON.stringify(data, null, 2));

    } catch (err) {

        console.error(err);

    }

}

module.exports = {
    init,
    getCubes,
    getOneCube,
    createCube,
    editCube,
};