const routes = require('express').Router();

routes.use('/boardgames', require('./boardgames'));
routes.use('/reviews', require('./reviews.js'));
routes.use('/sessions', require('./sessions'));
routes.use('/users', require('./users'));
routes.use('/api-docs', require('./swagger-route'));

module.exports = routes; 