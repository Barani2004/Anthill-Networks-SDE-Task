const express = require('express');
const { addBooking, getBookings, cancelBooking } = require('../controllers/bookingController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Protected Routes (Requires Authentication)
router.post('/', authMiddleware, addBooking);  // ✅ Now protected
router.get('/', authMiddleware, getBookings);
router.delete('/:id', authMiddleware, cancelBooking);

module.exports = router;
