const express = require('express');
const routes = express.Router();
// const security = require('../middleware/authorize.js');
// const userlink = require('../middleware/userlink.js');
const reviewsController = require('../controllers/reviews');
const {validateJWT} = require('../middleware/token.js')


routes.get('/', reviewsController.getReviews); 
routes.get('/:id', reviewsController.getReview);
routes.post('/', validateJWT, reviewsController.addReview);
routes.patch('/:id', reviewsController.editReview);
routes.delete('/:id', reviewsController.deleteReview);
// routes.post("/", security.checkLogin, userlink.findUser, reviewsController.addReview);
// routes.patch("/:id", security.checkLogin, userlink.findUser, reviewsController.editReview);
// routes.delete("/:id", security.checkLogin, userlink.findUser, reviewsController.deleteReview);

module.exports = routes; 