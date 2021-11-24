const Play = require('../models/Play.js');

async function getAllPlays(orderBy) {

    let sort = { createdAt: -1 };

    if (orderBy == 'likes') {

        sort = {usersLiked: 'desc'};

    }

    return await Play.find({ isPublic: true }).sort(sort).lean();

}

async function getPlayById(playId) {

    return await Play.findById(playId).populate('usersLiked').lean();

}

async function createPlay(playData) {

    const playPattern = new RegExp(`^${playData.title}$`, 'i');

    const existingPlay = await Play.find({ title: { $regex: playPattern } });

    if (existingPlay.length) {

        throw new Error('A play with this name already exists!');

    }

    const newPlay = new Play(playData);

    await newPlay.save();

    return newPlay;

}

async function editPlay(playId, playData) {

    // Tuk otnovo vzimam play - q, za da go prezapisha i da go save-vam, zashtoto inache validaciite shte se zaobikolqt, ako prosto go updeitna s Play.findByIdAndUpdate

    const play = await Play.findById(playId);

    play.title = playData.title;
    play.description = playData.description;
    play.imageUrl = playData.imageUrl;
    play.isPublic = playData.isPublic;

    return await play.save();

}

async function deletePlay(playId) {

    return await Play.findByIdAndDelete(playId);

}

async function likePlay(playId, userId) {

    const play = await Play.findById(playId);

    play.usersLiked.push(userId);

    return await play.save();

}

module.exports = {
    getAllPlays,
    getPlayById,
    createPlay,
    editPlay,
    deletePlay,
    likePlay,
};