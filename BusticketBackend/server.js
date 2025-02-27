const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const swaggerDocs = require("./swagger");

const authRoutes = require('./routes/authRoutes');
const busRoutes = require('./routes/busRoutes');
const routeRoutes = require('./routes/routeRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const userRoutes = require('./routes/userRoutes');

const { rateLimitMiddleware } = require('./middlewares/rateLimitMiddleware');
const { errorMiddleware } = require('./middlewares/errorMiddleware');
const corsConfig = require('./utils/corsConfig');
const logger = require('./utils/logger');


dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors(corsConfig));
app.use(morgan('dev'));
app.use(rateLimitMiddleware);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/buses', busRoutes);
app.use('/api/routes', routeRoutes);
console.log("Registering Routes...");
app.use('/api/bookings', bookingRoutes);
 // Ensure this matches your file structure



app.use('/api/users', userRoutes);

// Error Handling Middleware
app.use(errorMiddleware);


swaggerDocs(app);

// Database Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/busbooking';

mongoose.connect(MONGO_URI)
    .then(() => {
        logger.info('✅ MongoDB connected successfully');
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    })
    .catch(error => logger.error('❌ MongoDB connection error:', error));
