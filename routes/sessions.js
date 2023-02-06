const express = require('express');
const routes = express.Router();
const security = require('../middleware/authorize.js');
const userlink = require('../middleware/userlink.js');
const sessionsController = require('../controllers/sessions');


routes.get('/', sessionsController.getSessions); 
routes.get('/:id', sessionsController.getSession);
// routes.post('/', sessionsController.addSession);
// routes.patch('/:id', sessionsController.editSession);
// routes.delete('/:id', sessionsController.delSession);
routes.post('/', security.checkLogin, userlink.findUser, sessionsController.addSession);
routes.patch('/:id', security.checkLogin, userlink.findUser, sessionsController.editSession);
routes.delete('/:id', security.checkLogin, userlink.findUser, sessionsController.delSession);

module.exports = routes; 