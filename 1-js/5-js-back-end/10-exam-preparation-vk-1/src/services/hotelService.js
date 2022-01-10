const Hotel = require("../models/Hotel.js");
const User = require('../models/User.js');

async function createHotel(hotelData) {

    const hotel = new Hotel(hotelData);

    await hotel.save();

    return hotel;

}

async function getAllHotels() {

    const hotels = await Hotel.find({}).lean();

    return hotels;

}

async function getHotelById(hotelId) {

    const hotel = await Hotel.findById(hotelId).lean();

    return hotel;

}

async function editHotel(hotelId, hotelData) {

    const hotel = await Hotel.findById(hotelId);

    hotel.name = hotelData.name;

    hotel.city = hotelData.city;

    hotel.rooms = Number(hotelData.rooms);

    hotel.imageUrl = hotelData.imageUrl;

    return hotel.save();

}

async function deleteHotel(hotelId) {

    return Hotel.findByIdAndDelete(hotelId);

}

async function bookHotel(hotelId, userId) {

    const hotel = await Hotel.findById(hotelId);

    const user = await User.findById(userId);

    user.bookedHotels.push(hotelId);

    hotel.bookedBy.push(userId);

    return Promise.all([
        hotel.save(),
        user.save(),
    ]);

}

module.exports = {
    createHotel,
    getAllHotels,
    getHotelById,
    editHotel,
    deleteHotel,
    bookHotel,
};