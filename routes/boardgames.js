const express = require('express');
const routes = express.Router();
// const userlink = require('../middleware/userlink.js');
// const security = require('../middleware/authorize.js');
const {validateJWT} = require('../middleware/token.js');
const boardgamesController = require('../controllers/boardgames');


routes.get('/', boardgamesController.getBoardgames); 
routes.get('/:id', boardgamesController.getBoardgame);
routes.post('/', validateJWT, boardgamesController.addBoardgame);
routes.patch('/:id', validateJWT, boardgamesController.editBoardgame);
routes.delete('/:id', validateJWT, boardgamesController.delBoardgame);

module.exports = routes; 