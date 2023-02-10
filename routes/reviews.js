const express = require('express');
const routes = express.Router();
// const security = require('../middleware/authorize.js');
const userlink = require('../middleware/userlink.js');
const reviewsController = require('../controllers/reviews');
const {validateJWT} = require('../middleware/token.js')


routes.get('/', reviewsController.getReviews); 
routes.get('/:id', reviewsController.getReview);
// routes.post('/', validateJWT, reviewsController.addReview);
// routes.patch('/:id', validateJWT, reviewsController.editReview);
// routes.delete('/:id', validateJWT, reviewsController.deleteReview);
routes.post("/", validateJWT, userlink.findUser, reviewsController.addReview);
routes.patch("/:id", validateJWT, reviewsController.editReview);
routes.delete("/:id", validateJWT, reviewsController.deleteReview);

module.exports = routes; 