const Trip = require('../models/Trip.js');

async function getAllTrips() {

    return Trip
        .find({})
        .lean();

}

async function createTrip(tripData) {

    const newTrip = new Trip(tripData);

    await newTrip.save();

    return newTrip

}

async function getTripById(tripId) {

    return Trip
        .findById(tripId)
        .populate('creator')
        .populate('buddies')
        .lean();

}

async function joinTrip(tripId, userId) {

    const trip = await Trip.findById(tripId);

    trip.seats--;
    
    trip.buddies.push(userId);

    return trip.save();

}

async function deleteTrip(tripId) {

    return Trip.findByIdAndDelete(tripId);

}

async function editTrip(tripId, tripData) {

    return Trip.findByIdAndUpdate(tripId, tripData);

}

module.exports = {
    getAllTrips,
    createTrip,
    getTripById,
    joinTrip,
    deleteTrip,
    editTrip,
};