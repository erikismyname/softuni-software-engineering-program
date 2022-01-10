const Hotel = require('../models/Hotel.js');
const User = require('../models/User.js');

async function getAllHotels() {

    return Hotel
        .find({})
        .sort({ rooms: 'desc' })
        .lean();

}

async function getHotelById(hotelId) {

    return Hotel
        .findById(hotelId)
        .lean();

}

async function getHotelByName(hotelName) {

    const hotelPattern = new RegExp(`^${hotelName}$`, 'i');

    return Hotel.findOne({ name: { $regex: hotelPattern } });

}

async function createHotel(hotelData) {

    const newHotel = new Hotel(hotelData);

    return newHotel.save();

}

async function deleteHotel(hotelId) {

    return Hotel.findByIdAndDelete(hotelId);

}

async function editHotel(hotelId, hotelData) {

    return Hotel.findByIdAndUpdate(hotelId, hotelData);

}

async function bookHotel(hotelId, userId) {

    const [hotel, user] = await Promise.all([
        Hotel.findById(hotelId),
        User.findById(userId),
    ]);

    hotel.bookedBy.push(userId);

    hotel.rooms--;

    user.bookedHotels.push(hotelId);

    return Promise.all([
        hotel.save(),
        user.save(),
    ]);

}

module.exports = {
    getAllHotels,
    getHotelById,
    getHotelByName,
    createHotel,
    deleteHotel,
    editHotel,
    bookHotel,
};