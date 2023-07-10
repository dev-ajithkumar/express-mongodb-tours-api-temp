// Import the 'Tour' model
const Tour = require('../models/tourModel');

// Controller function to add a new tour
exports.addNewTour = async (req, res) => {
    try {
        const newTour = new Tour(req.body);
        await newTour.save();
        const {name, rating, price} = newTour;
        res.status(201).send({
            status: 'success',
            name,
            rating,
            price
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message
        });
    }
}

// Controller function to get all tours
exports.getAllTours = async (req, res) => {
    try {
        const getTours = await Tour.find().select('-createdAt -__v');
        res.status(200).json({ count: getTours.length, getTours });
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving items' });
    }
}

// Controller function to get a tour by its ID
exports.getTourById = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id);
        if (!tour) {
            return res.status(404).json({ error: 'Tour Not Found' });
        }
        const {name, rating, price, _id} = tour;
        res.json({_id, name, rating, price });
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving items' });
    }
}

// Controller function to update a tour by its ID
exports.updateById = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!tour) {
            return res.status(404).json({ error: 'Tour Not Found' });
        }
        const {name, rating, price, _id} = tour;
        res.json({_id, name, rating, price });
    } catch (error) {
        res.status(500).json({ error: 'Error updating item' });
    }
}

// Controller function to delete a tour by its ID
exports.deleteById = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndDelete(req.params.id);
        if (!tour) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.json({ message: "Tour deleted" });
    } catch (error) {
        res.status(410).json({ error: 'Error deleting item' });
    }
}
