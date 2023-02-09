const express = require('express');
const routes = express.Router();
// const userlink = require('../middleware/userlink.js');
// const security = require('../middleware/authorize.js');
const usersController = require('../controllers/users');
const {validateJWT} = require('../middleware/token.js');

//userlink experiment
// routes.get('/', security.checkLogin, userlink.findUser); 

routes.get('/', usersController.getUsers);
routes.get('/:id', usersController.getUser);
// routes.post('/', usersController.addUser);
// routes.patch('/:id', usersController.editUser);
// routes.delete('/:id', usersController.delUser);
routes.post("/", validateJWT, usersController.addUser);
routes.patch("/:id", validateJWT, usersController.editUser);
routes.delete("/:id", validateJWT, usersController.delUser);

module.exports = routes; 