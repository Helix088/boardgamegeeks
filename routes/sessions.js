const express = require('express');
const routes = express.Router();
const {findUser} = require('../middleware/userlink.js');
const sessionsController = require('../controllers/sessions');
const {checkLogin} = require('../middleware/authorize.js');
const {validateJWT} = require('../middleware/token.js');


routes.get('/', sessionsController.getSessions); 
routes.get('/:id', sessionsController.getSession);

if (process.env.NODE_ENV === 'test') {
  routes.post('/', validateJWT, findUser, sessionsController.addSession);
  routes.patch('/:id', validateJWT, sessionsController.editSession);
  routes.delete('/:id', validateJWT, sessionsController.delSession);
} else {
  routes.post('/', checkLogin, findUser, sessionsController.addSession);
  routes.patch('/:id', checkLogin, sessionsController.editSession);
  routes.delete('/:id', checkLogin, sessionsController.delSession);
}

module.exports = routes; 