const express = require('express');
const routes = express.Router();
// const userlink = require('../middleware/userlink.js');
// const security = require('../middleware/authorize.js');
const boardgamesController = require('../controllers/boardgames');


routes.get('/', boardgamesController.getBoardgames); 
routes.get('/:id', boardgamesController.getBoardgame);
routes.post('/', boardgamesController.addBoardgame);
// routes.post('/', security.checkLogin, boardgamesController.addBoardgame);
routes.patch('/:id', boardgamesController.editBoardgame);
// routes.patch('/:id', security.checkLogin, boardgamesController.editBoardgame);
routes.delete('/:id', boardgamesController.delBoardgame);
// routes.delete('/:id', security.checkLogin, boardgamesController.delBoardgame);

module.exports = routes; 