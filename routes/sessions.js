const express = require('express');
const routes = express.Router();
const security = require('../middleware/authorize.js');
const sessionsController = require('../controllers/sessions');


// routes.get('/', sessionsController.getSessions); 
// routes.get('/:id', sessionsController.getSession);
// routes.post('/', security.checkLogin, sessionsController.addSession);
// routes.patch('/:id', security.checkLogin, sessionsController.editSession);
// routes.delete('/:id', security.checkLogin, sessionsController.delSession);

module.exports = routes; 