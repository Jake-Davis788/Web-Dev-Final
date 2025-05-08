const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');  // Database connection function

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();
app.use(cors());
app.use(express.json());  // Middleware to parse JSON bodies

// Define the routes
app.use('/api/auth', require('./routes/auth'));  // Auth routes
app.use('/api/workouts', require('./routes/workouts'));  // Workouts routes
app.use('/api/posts', require('./routes/posts'));  // Posts routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));