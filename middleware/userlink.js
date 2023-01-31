const security = require('./authorize.js');
const usersController = require('../controllers/users');

// The idea of this middleware is to, first, perform the checkLogin action (to see if we're logged in)
//If so, we're then going to check their oidc info versus our databse and try to find the corresponding user
//If we cannot find them (i.e. don't exist yet), we perform a post to create the user, before moving forward
//finally we keep it moving with next()


// For some reason doing it like this won't properly catch a logged out user.
//So I'm forced to add it back into routes before this call
// security.checkLogin;

const findUser = (req, res, next) => {
  // res.send(JSON.stringify(req.oidc.user));
  console.log("userlink.js line 13 ", (req.oidc.user.email));

  try {
    usertest = usersController.getUserByUserlink
    console.log("Outside getUserbyUserlink userlink.js line 17");
    res.json(usertest);
    
  } catch (err) {
    // We assume this happens when user not found as they don't exist. Sadly there could be other reasons; might want to rethink this idea
    console.log("userlink.js catchblock");
    console.log("Couldn't find them...creating...")
    usersController.addUserbyUserlink;
  };




  next();
}
module.exports = {findUser};