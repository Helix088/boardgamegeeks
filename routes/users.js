const express = require('express');
const routes = express.Router();
const security = require('../middleware/authorize.js');
const usersController = require('../controllers/users');


// routes.get('/', usersController.getUsers); 
// routes.get('/:id', usersController.getUser);
// routes.post('/', security.checkLogin, usersController.addUser);
// routes.patch('/:id', security.checkLogin, usersController.editUser);
// routes.delete('/:id', security.checkLogin, usersController.delUser);

module.exports = routes; 