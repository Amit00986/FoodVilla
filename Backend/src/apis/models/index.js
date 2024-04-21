
const mongoose = require('mongoose');

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
    }

});

const Resturnat = new mongoose.model('ResturnatList', ResturnatSchema);


module.exports = Resturnat