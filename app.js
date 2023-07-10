// Import the 'express' module for creating an Express application
const express = require('express');

// Import the 'dotenv' module for loading environment variables from a file
const dotenv = require('dotenv');

// Create an instance of the Express application
const app = express();

// Specify the port number for the server to listen on
const port = 3000;

// Import the 'mongoose' module for MongoDB connection and data modeling
const mongoose = require('mongoose');

// Enable parsing of JSON data in request bodies
app.use(express.json());

// Import the 'tourRoutes' module for handling tour-related routes
const tourRoutes = require('./routes/tourRoutes');

// Load environment variables from the 'config.env' file
dotenv.config({
    path: './config.env'
});

// Replace '<password>' placeholder in the 'DATABASE' variable with the actual MongoDB password from the environment variables
const databaseConnection = process.env.DATABASE.replace('<password>', process.env.MONGODB_PASSWORD);

// Connect to MongoDB using Mongoose with specified connection options
mongoose.connect(databaseConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));

// Mount the 'tourRoutes' middleware on the '/api/v1/tours' path
app.use(`/api/v1/tours`, tourRoutes);

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
