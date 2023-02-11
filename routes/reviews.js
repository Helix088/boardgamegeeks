const express = require('express');
const routes = express.Router();
const {findUser} = require('../middleware/userlink.js');
const reviewsController = require('../controllers/reviews');
const {checkLogin} = require('../middleware/authorize.js');
const {validateJWT} = require('../middleware/token.js');


routes.get('/', reviewsController.getReviews); 
routes.get('/:id', reviewsController.getReview);

if (process.env.NODE_ENV === 'test') {
  routes.post('/', validateJWT, findUser, reviewsController.addReview);
  routes.patch('/:id', validateJWT, reviewsController.editReview);
  routes.delete('/:id', validateJWT, reviewsController.delReview);
} else {
  routes.post('/', checkLogin, findUser, reviewsController.addReview);
  routes.patch('/:id', checkLogin, reviewsController.editReview);
  routes.delete('/:id', checkLogin, reviewsController.delReview);
}

module.exports = routes; 