const express = require('express');
const routes = express.Router();
const {checkLogin} = require('../middleware/authorize.js');
const {validateJWT} = require('../middleware/token.js');
const boardgamesController = require('../controllers/boardgames');


routes.get('/', boardgamesController.getBoardgames); 
routes.get('/:id', boardgamesController.getBoardgame);

if (process.env.NODE_ENV === 'test') {
  routes.post('/', validateJWT, boardgamesController.addBoardgame);
  routes.patch('/:id', validateJWT, boardgamesController.editBoardgame);
  routes.delete('/:id', validateJWT, boardgamesController.delBoardgame);
} else {
  routes.post('/', checkLogin, boardgamesController.addBoardgame);
  routes.patch('/:id', checkLogin, boardgamesController.editBoardgame);
  routes.delete('/:id', checkLogin, boardgamesController.delBoardgame);
}


module.exports = routes; 