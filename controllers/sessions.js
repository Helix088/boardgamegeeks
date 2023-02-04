const Session = require('../models/sessions');

const getSessions = async (req, res) => {
    try {
        const Sessions = await Session.find();
        res.status(200).json(Sessions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getSession = async (req, res) => {
    // if (!ObjectId.isValid(req.params.id)) {
    //     res.status(400).json('Must use a valid id to find a session)
    // } // used this with mongodb
    try {
        const session = await Session.findById(req.params.id);
        if (!session) {
            // 404 means does not exist
            res.status(404).json({ message: "Can't find this session." });
            return 
        }
        res.status(200).json(session);
    } catch (err) {
        res.status(500).json({ message: err.message }); // 500 is a server error
    }
};

const addSession = async (req, res) => {  
    try {
        const session = new Session(req.body);
        session.save().then((data) =>{
            res.status(201).send(data);
        })
        .catch((err) => {
            res.status(500).json({ message: err.messsage || 'Error occured creating session.' });
        });        
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const delSession = async (req, res) => {
    // if (!ObjectId.isValid(req.params.id)) {
    //     res.status(400).json('Must use a valid id to remove a boardgame.')
    // } used this for mongodb    
    try {
        const session = await Session.findById(req.params.id);
        if (!session) {
            res.status(404).json({ message: "Cannot find this session." });
            return;
        }
        const result = session.remove();
        res.status(200).json({ message: "Successfully deleted session." });
    } catch (err) {
        res.status(500).json({ message: err.message || 'An error occured while attempting to delete.'});
    }
};

const editSession = async (req, res) => {
    try {
        const session = await Session.findByIdAndUpdate(req.params.id, req.body, { new: true});
        if (!session) {
            return res.status(404).send("No session found.");
        }
    } catch (err) {
        res.status(204).send(session); // this does not give a confirmation message    
    }
};

module.exports = {
    getSessions,
    getSession,
    addSession,    
    delSession, 
    editSession
}