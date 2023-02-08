const Boardgame = require('../models/boardgame');

const getBoardgames = async (req, res) => {
    try {
        const boardgames = await Boardgame.find();
        res.status(200).json(boardgames);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getBoardgame = async (req, res) => {
    try {
        const game = await Boardgame.findById(req.params.id);
        if (!game) {
            // 404 means does not exist
            res.status(404).json({ message: "Can't find this boardgame." });
            return 
        }
        res.status(200).json(game);
    } catch (err) {
        res.status(500).json({ message: err.message }); // 500 is a server error
    }
};

const addBoardgame = async (req, res) => {  
    try {
      console.log(req.body)
        const boardgame = new Boardgame(req.body);
        boardgame.save().then((data) =>{
            res.status(201).send(data);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message || 'Error occured creating boardgame.' });
        });        
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    // console.log(boardgame)
};

const delBoardgame = async (req, res) => {
    try {
        const boardgame = await Boardgame.findById(req.params.id);
        if (!boardgame) {
            res.status(404).json({ message: "Cannot find this boardgame." });
            return;
        }
        const result = boardgame.remove();
        res.status(200).json({ message: "Successfully deleted boardgame." });
    } catch (err) {
        res.status(500).json({ message: err.message || 'An error occured while attempting to delete.'});
    }
};

const editBoardgame = async (req, res) => {
    try {
        const boardgame = await Boardgame.findByIdAndUpdate(req.params.id, req.body, { new: true});
        if (!boardgame) {
            return res.status(404).send("No boardgame found.");
        }
        res.status(204).send(boardgame); // 204 doesn't show success message
    } catch (err) {
      res.status(500).send(err);
    }
};

module.exports = {
    getBoardgames,
    getBoardgame,
    addBoardgame,    
    delBoardgame, 
    editBoardgame
}