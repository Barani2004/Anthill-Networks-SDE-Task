const express = require('express');
const router = express.Router();

// Example Route
router.get('/', (req, res) => {
    res.send('Route working successfully');
});

module.exports = router;
