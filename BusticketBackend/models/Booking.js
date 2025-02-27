const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema(
  {
    user: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    },
    bus: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Bus', 
      required: true 
    },
    seatsBooked: { 
      type: Number, 
      required: true,
      min: [1, 'At least 1 seat must be booked']
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Booking', BookingSchema);
