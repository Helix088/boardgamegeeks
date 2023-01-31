const User = require('../models/user')

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
      //200 is generic success
      res.status(200).json(users);
    } catch (err) {
        //500 means server error, not user error
      res.status(500).json({message: err.message});
    }
};


const getUser = async (req, res, next) => { 
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      // 404 means does not exist
      res.status(404).json({message: "Can't find this user."});
      return;
    }
    res.status(200).json(user);
  } catch (err) {
    //500 means server error, not user error
    res.status(500).json({message: err.message});
  }
};


const addUser = async (req, res, next) => {
  try {
    //Reject if there are any missing fields
    if (!req.body.email || !req.body.username) {
      //400 means user error - didn't use all values for instance
      res.status(400).send({ message: 'Content can not be empty!' });
    }

    const user = new User(req.body);
    user.save().then((data) => {
      //201 means new thing created as opposed to general 200 "everything worked"
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).json({message: err.message || 'Error occured creating user.'});
    });
  } catch (err) {
    //500 means server error, not user error
    res.status(500).json({message: err.message});
  }
}


const delUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      // 404 means does not exist
      res.status(404).json({message: "Can't find this user."});
      return;
    }
    const result = user.remove();
    res.status(200).json({message: "Successfully deleted user."});
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};


const editUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      //404 means does not exist
      return res.status(404).send("No user found.");
    }
    //204 succeeds but doesn't navigate away
    //The relevant circumstance is I can't run json messages from it
    //But I'll leave it anyway or else it won't give me any response at all?!
    res.status(204).send(user);
  } catch(err) {
    res.status(500).send(err)
  }
}


// Userlink experiment


// This function only gets called by /middleware/userlink to see if we exist
const getUserByUserlink = async (req, res, next) => { 
  console.log("Inside getUserByUserlink")
  try {
    console.log("Before attempt to find")
    const user = await User.findOne({ email: req.oidc.user.email });
    console.log("After attempt to find")
    
    if (!user) {
      console.log("No user - cont/users line 39")
      //Rather than freaking out and throwing 404, just send it right back
      next();
    } else {
      console.log("Found user")
      return user;
    }
    //Rather than returning 200 and stopping, continue instead
    //This function is only being ran as part of /middleware/userlink after all
    next();
  } catch (err) {
    console.log("Bad error catch block getUserByUserlink")
    //500 means server error, not user error
    res.status(500).json({message: err.message});
  }
};


const addUserByUserlink = async (req, res, next) => {
  try {

    const info = {
      username: req.oidc.user.nickname,
      email: req.oidc.user.email
    };
    
    
    const user = new User(info);
    // const user = new User(req.body);
    user.save().then((data) => {
      //201 means new thing created as opposed to general 200 "everything worked"
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).json({message: err.message || 'Error occured creating user.'});
    });
  } catch (err) {
    //500 means server error, not user error
    res.status(500).json({message: err.message});
  }
}


module.exports = { getUsers, getUser, addUser, delUser, editUser, getUserByUserlink, addUserByUserlink};