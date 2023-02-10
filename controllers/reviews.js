const Review = require('../models/reviews')

const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getReview = async (req, res, next) => {
    try {
        const review = await Review.findById(req.params.id);
        if(!review) {
            res.status(404).json({ message: "Can't find this review." });
            return;
        }
        res.status(200).json(review);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const addReview = async (req, res, next) => {
    try {
        const review = new Review({...req.body, username: req.user.username});
        review.save().then((data) => {
            res.status(201).send(data);
        })
        .catch((err) => {
            // res.status(500).json({ message: err.message || 'Error occured creating the review.' });
            console.error(err);
            next(err);
        });
    } catch(err) {
        // res.status(500).json({ message: err.message });
        console.error(err);
            next(err);
        return
    }
};

const editReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!review) {
            return res.status(404).send("No review found.");
        }
        res.status(204).send(review);
    } catch (err) {
        res.status(500).send(err);
        return
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
        return
    }
}

const getReviewByGameName = async (req, res, next) => {
    try {
        const review = await Review.findOne({ boardgame: req.oidc.boardgame.name });
        if(!review) {
            console.log("No review - cont/reviews line 69");
        } else {
            return review;
        }
    } catch(err) {
        res.status(500).json({message: err.message});
    }
}

const addReviewByGameName = async (req, res, next) => {
    try {
        const info = {
            boardgame: req.oidc.boardgame.name,
        };
        const review = new Review(info);
        review.save().then((data) => {
            return review;
        })
        .catch((err) => {
            if(!res.headersSent) {
                res.status(500).json({message: err.message || "Error occured when creating review."});
            }
        });
    } catch(err) {
        if(!res.headersSent) {
            res.status(500).json({message: err.message});
        }
    }
}

module.exports = {
    getReviews,
    getReview,
    addReview,
    editReview,
    deleteReview,
    getReviewByGameName,
    addReviewByGameName,
}