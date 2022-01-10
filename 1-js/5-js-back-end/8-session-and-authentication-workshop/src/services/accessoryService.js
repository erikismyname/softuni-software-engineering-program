const Accessory = require('../models/Accessory.js');

async function getAllAccessories(existing) {

    return Accessory.find({ _id: { $nin: existing } }).lean();

}

async function createAccessory(accessory) {

    const newAccessory = new Accessory(accessory);

    await newAccessory.save();

}

module.exports = {
    getAllAccessories,
    createAccessory,
};