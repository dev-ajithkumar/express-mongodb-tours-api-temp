// Import the 'mongoose' module
const mongoose = require('mongoose');

// Define the tourSchema using the mongoose.Schema constructor
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
    validate: {
      validator: async function(name) {
        // Validate that no other tour with the same name exists
        const tour = await mongoose.model('Tour').findOne({ name });
        return !tour; // Return true if no tour with the same name exists
      },
      message: 'The name must be unique'
    }
  },
  price: {
    type: Number
  },
  rating: {
    type: Number,
    default: 4.5
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create the 'Tour' model using the tourSchema
const Tour = mongoose.model('Tour', tourSchema);

// Export the 'Tour' model to be used in other files
module.exports = Tour;
