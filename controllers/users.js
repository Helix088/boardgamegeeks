const User = require('../models/user')
const jose = require('jose')

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

// const decodeToken = async (token) => {

//   console.log("Hey we're here")
  
//   const secret = process.env.SECRET
//   const leedle = await jose.jwtDecrypt(token, secret)
  
  
//   console.log(leedle)
//   return
  
//   // const decoded = new TextDecoder()
//   // console.log(decoded)
//   // const attempt2 = decoded.decode(token)
  
//     // const decoded = jose.base64url.decode(token)
//     // console.log(attempt2)
//     // const payload = Buffer.from(decoded, "base64" ).toString("utf8")
//     // console.log(payload)
//     // console.log(typeof payload)
//     // const parsed = JSON.parse(payload)
//     // console.log(parsed)
//     // return payload;
// }


// This function only gets called by /middleware/userlink to see if we exist
const getUserByUserlink = async (req, res, next) => { 
  console.log("Inside getUserByUserlink")
  try {
    console.log("Before attempt to find")
    
    // const user = await User.findOne({ email: req.oidc.user.email });




    const token = req.headers.authorization;
    const stripped = token.replace("Bearer ", "");
    const decoded = decodeToken(stripped);
    // console.log(decoded)

    // const user = 
    console.log("After attempt to find")

    if (!user) {
      console.log("No user - cont/users line 94")
      //Rather than freaking out and throwing 404, just send it right back
    } else {
      console.log("Found user")
      console.log(user)
      return user;
    }
  } catch (err) {
    console.log("Bad error catch block getUserByUserlink")
    //500 means server error, not user error
    res.status(500).json({message: err.message});
  }
};


const addUserByUserlink = async (req, res, next) => {
  console.log("Inside addUserByUserlink")
  // console.log(req.body)
  // console.log(req.oidc)
  // console.log(req.oidc.user)
  // console.log(req.oidc.user.nickname)
  // console.log(req.oidc.user.email)
  try {

    const info = {
      username: req.oidc.user.nickname,
      email: req.oidc.user.email
    };
    console.log("Pulled info")
    
    const user = new User(info);
    // const user = new User(req.body);
    user.save().then((data) => {
      console.log("created:");
      console.log(user);
      return user;
    })
    .catch((err) => {
      if (!res.headersSent) {
        res.status(500).json({message: err.message || 'Error occured creating user.'});
      }
    });
  } catch (err) {
    //500 means server error, not user error
    if (!res.headersSent) {
      res.status(500).json({message: err.message});
    }
  }
}




module.exports = { getUsers, getUser, addUser, delUser, editUser, getUserByUserlink, addUserByUserlink};