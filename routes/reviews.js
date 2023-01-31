const express = require('express');
const routes = express.Router();
const security = require('../middleware/authorize.js');
const reviewsController = require('../controllers/reviews');


// routes.get('/', reviewsController.getReviews); 
// routes.get('/:id', reviewsController.getReview);
// routes.post('/', security.checkLogin, reviewsController.addReview);
// routes.patch('/:id', security.checkLogin, reviewsController.editReview);
// routes.delete('/:id', security.checkLogin, reviewsController.delReview);

module.exports = routes; 