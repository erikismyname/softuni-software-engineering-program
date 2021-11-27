const Play = require('../models/Play.js');
const User = require('../models/User.js');


async function getPlaysForGuest() {

    return Play
        .find({ isPublic: true })
        .sort({ usersLiked: 'desc' })
        .limit(3)
        .lean();

}

async function getPlaysForUser(query) {

    const sortQuery = !query ? {createdAt: 'desc'} : {usersLiked: 'desc'};

    return Play
        .find({ isPublic: true })
        .sort(sortQuery)
        .lean();

}

async function createPlay(playData) {

    const newPlay = new Play(playData);

    return newPlay.save();

}

async function getPlayById(playId) {

    return Play
        .findById(playId)
        .lean();

}

async function likePlay(playId, userId) {

    const [play, user] = await Promise.all([
        Play.findById(playId),
        User.findById(userId),
    ]);

    play.usersLiked.push(userId);

    user.likedPlays.push(playId);

    return Promise.all([
        play.save(),
        user.save(),
    ]);

}

async function deletePlay(playId) {

    return Play.findByIdAndDelete(playId);

}

async function editPlay(playId, playData) {

    return Play.findByIdAndUpdate(playId, playData);

}

module.exports = {
    getPlaysForGuest,
    getPlaysForUser,
    createPlay,
    getPlayById,
    likePlay,
    deletePlay,
    editPlay,
};