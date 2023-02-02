const review = require('../models/reviews')
const Review = require('../models/reviews')

const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getReview = async (req, res) => {
    try {
        const gameId = await Review.findById(req.params.id);
        if(!gameId) {
            res.status(404).json({ message: "Can't find this review." });
            return;
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const addReview = async (req, res) => {
    try {
        const review = new Review(req.body);
        review.save().then((data) => {
            res.status(201).send(data);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message || 'Error occured creating the review.' });
        });
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
};

const editReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!review) {
            return res.status(404).send("No review found.");
        }
    } catch (err) {
        res.status(204).send(review)
    }
}

const deleteReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if(!review) {
            res.status(404).json({ message: "Cannot find this review." })
            return;
        }
        const result = review.remove();
        res.status(200).json({ message: "Successfully deleted review." })
    } catch(err) {
        res.status(500).json({ message: err.message || 'An error occured while attempting to delete the review.'})
    }
}

module.exports = {
    getReviews,
    getReview,
    addReview,
    editReview,
    deleteReview,
}