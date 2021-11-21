const Cube = require('../models/Cube.js');
const Comment = require('../models/Comment.js');
const Accessory = require('../models/Accessory.js');


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

    const cube = await Cube
        .findById(cubeId)
        .populate({
            path: 'comments',
            populate: { path: 'author' },
        })
        .populate('accessories')
        .populate('creator')
        .lean();

    const viewModel = {
        id: cube._id,
        name: cube.name,
        description: cube.description,
        imageUrl: cube.imageUrl,
        difficulty: cube.difficulty,
        comments: cube.comments.map(c => ({ content: c.content, author: c.author.username })),
        accessories: cube.accessories,
        creator: cube.creator?.username,
        creatorId: cube.creator?._id,
    };

    return cube ? viewModel : undefined;

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
    getCubes,
    getOneCube,
    createCube,
    editCube,
    createComment,
    attachSticker,
};