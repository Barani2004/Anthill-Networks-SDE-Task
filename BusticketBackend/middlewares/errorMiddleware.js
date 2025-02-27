const errorMiddleware = (err, req, res, next) => {
    res.status(500).json({ error: err.message || 'Internal Server Error' });
};

module.exports = { errorMiddleware };
