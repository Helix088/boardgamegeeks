const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema ({
    boardgame: {
        type: Number,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    reviewText: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Reviews', reviewSchema);