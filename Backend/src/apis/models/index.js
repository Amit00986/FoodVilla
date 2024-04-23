const mongoose = require('mongoose');

const FoodItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
});

const ResturnatSchema = new mongoose.Schema({
    Id: {
        type: String
    },
    name: {
        type: String
    },
    cuisine: [{
        type: String
    }],
    image: {
        type: String
    },
    address: {
        type: String
    },
    rating: {
        type: Number
    },
    menu: [FoodItemSchema] // Menu field to include array of food items
});

const Resturnat = mongoose.model('ResturnatList', ResturnatSchema);

module.exports = Resturnat;
