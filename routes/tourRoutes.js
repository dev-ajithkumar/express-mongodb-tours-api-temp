// Import the 'express' module for creating a router
const express = require('express');

// Import the individual functions from the 'tourController' module
const { addNewTour, getAllTours, getTourById, updateById, deleteById } = require('../controllers/tourController');

// Create an instance of the router
const router = express.Router();

// Define the routes and their corresponding controller functions
router.post('/', addNewTour);     // Route to add a new tour
router.get('/', getAllTours);     // Route to get all tours
router.get('/:id', getTourById);  // Route to get a tour by its ID
router.put('/:id', updateById);   // Route to update a tour by its ID
router.delete('/:id', deleteById); // Route to delete a tour by its ID

// Export the router to be used in other files
module.exports = router;
