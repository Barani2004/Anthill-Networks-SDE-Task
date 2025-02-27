const express = require('express');
const { addBus, getBuses, updateBus, deleteBus } = require('../controllers/busController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

const router = express.Router();

// Public route - Get all buses
router.get('/', getBuses);

// Admin routes - Require authentication & admin role
router.post('/', addBus);
router.put('/:id', authMiddleware, adminMiddleware, updateBus);
router.delete('/:id', authMiddleware, adminMiddleware, deleteBus);

module.exports = router;
