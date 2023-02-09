const express = require('express');
const routes = express.Router();
const security = require('../middleware/authorize.js');
const userlink = require('../middleware/userlink.js');
const sessionsController = require('../controllers/sessions');
const {validateJWT} = require('../middleware/token.js');


routes.get('/', sessionsController.getSessions); 
routes.get('/:id', sessionsController.getSession);
// routes.post('/', sessionsController.addSession);
// routes.patch('/:id', sessionsController.editSession);
// routes.delete('/:id', sessionsController.delSession);
routes.post('/', validateJWT, userlink.findUser, sessionsController.addSession);
routes.patch('/:id', validateJWT, userlink.findUser, sessionsController.editSession);
routes.delete('/:id', validateJWT, userlink.findUser, sessionsController.delSession);

module.exports = routes; 