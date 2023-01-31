const express = require('express');
const routes = express.Router();
const userlink = require('../middleware/userlink.js');
const security = require('../middleware/authorize.js');
const usersController = require('../controllers/users');

//userlink experiment
// routes.get('/', security.checkLogin, userlink.findUser); 

// routes.get('/:id', usersController.getUser);
// routes.get('/:email', usersController.getUserByEmail);
// routes.post('/', security.checkLogin, usersController.addUser);
// routes.patch('/:id', security.checkLogin, usersController.editUser);
// routes.delete('/:id', security.checkLogin, usersController.delUser);

routes.get('/', usersController.getUsers);
routes.get('/:id', usersController.getUser);
// routes.get('/:email', usersController.getUserByEmail);
routes.post('/', security.checkLogin, usersController.addUser);
routes.patch('/:id', security.checkLogin, usersController.editUser);
routes.delete('/:id', security.checkLogin, usersController.delUser);

module.exports = routes; 