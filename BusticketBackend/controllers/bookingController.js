const Booking = require('../models/Booking');
const Bus = require('../models/Bus');


// ✅ Create a New Booking
const addBooking = async (req, res) => {
    try {
        console.log('Received Booking Request:', req.body);
        const { bus, seatsBooked } = req.body;
        const userId = req.user.id; // Extract user ID from middleware

        const booking = new Booking({ user: userId, bus, seatsBooked });
        await booking.save();

        res.status(201).json({ message: "Booking successful", booking });
    } catch (error) {
        res.status(500).json({ error: "Server error", details: error.message });
    }
};

module.exports = { addBooking };


const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate('bus').populate('user');
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const cancelBooking = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) return res.status(404).json({ error: 'Booking not found' });

        const bus = await Bus.findById(booking.bus);
        bus.availableSeats += booking.seatsBooked;
        await bus.save();

        await booking.deleteOne();

        res.json({ message: 'Booking canceled' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addBooking, getBookings, cancelBooking };
