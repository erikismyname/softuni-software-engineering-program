const Cube = require('../models/Cube.js');
const Comment = require('../models/Comment.js');
const Accessory = require('../models/Accessory.js');

async function init() {

    return (req, res, next) => {

        req.storage = {
            getCubes,
            getOneCube,
            createCube,
            editCube,
            createComment,
            createAccessory,
            getAllAccessories,
            attachSticker
        };

        next();

    };

}

async function getCubes(query) {

    const options = {};

    if (query.search) {

        options.name = { $regex: query.search, $options: 'i' };

    }

    if (query.from) {

        options.difficulty = { $gte: Number(query.from) };

    }

    if (query.to) {

        options.difficulty = options.difficulty || {};

        options.difficulty.$lte = Number(query.to);

    }

    const cubes = Cube.find(options).lean();

    return cubes;

}

async function getOneCube(cubeId) {

    const cube = Cube.findById(cubeId).populate('comments').populate('accessories').lean();

    return cube ? cube : undefined;

}

async function createCube(cube) {

    const newCube = new Cube(cube);

    await newCube.save();

}

async function editCube(cubeId, cube) {

    const currCube = await Cube.findById(cubeId);

    if (!currCube) {

        throw new Error('No such ID in DB!');

    }

    Object.assign(currCube, cube);

    await currCube.save();

}

async function createComment(cubeId, comment) {

    const currCube = await Cube.findById(cubeId);

    if (!currCube) {

        throw new Error('No such ID in DB!');

    }

    const newComment = new Comment(comment);

    await newComment.save();

    currCube.comments.push(newComment);

    await currCube.save();

}

async function createAccessory(accessory) {

    const newAccessory = new Accessory(accessory);

    await newAccessory.save();

}

async function getAllAccessories(existing) {
    console.log('existing', existing);

    return Accessory.find({ _id: { $nin: existing } }).lean();

}

async function attachSticker(cubeId, stickerId) {

    const cube = await Cube.findById(cubeId);

    const sticker = await Accessory.findById(stickerId);

    if (!cube || !sticker) {

        throw new Error('No such ID in DB!')

    }

    cube.accessories.push(sticker);

    await cube.save();

}

module.exports = {
    init,
    getCubes,
    getOneCube,
    createCube,
    editCube,
    createComment,
    createAccessory,
    getAllAccessories,
    attachSticker
};