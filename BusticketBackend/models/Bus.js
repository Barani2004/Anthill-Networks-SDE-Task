const mongoose = require('mongoose');

const BusSchema = new mongoose.Schema({
    name: { type: String, required: true },
    number: { type: String, required: true, unique: true },
    seats: { type: Number, required: true },
    availableSeats: { type: Number, required: true },
    route: { type: mongoose.Schema.Types.ObjectId, ref: 'Route', required: true }
});

module.exports = mongoose.model('Bus', BusSchema);
