const express = require('express');
const routes = express.Router();
const usersController = require('../controllers/users');
const {checkLogin} = require('../middleware/authorize.js');
const {validateJWT} = require('../middleware/token.js');


routes.get('/', usersController.getUsers);
routes.get('/:id', usersController.getUser);

if (process.env.NODE_ENV === 'test') {
  routes.post('/', validateJWT, usersController.addUser);
  routes.patch('/:id', validateJWT, usersController.editUser);
  routes.delete('/:id', validateJWT, usersController.delUser);
} else {
  routes.post('/', checkLogin, usersController.addUser);
  routes.patch('/:id', checkLogin, usersController.editUser);
  routes.delete('/:id', checkLogin, usersController.delUser);
}

module.exports = routes; 