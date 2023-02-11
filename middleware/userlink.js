const usersController = require('../controllers/users');

// The idea of this middleware is to, first, 
//check their oidc info versus our database and try to find the corresponding user
//If we cannot find them (i.e. don't exist yet), 
//we perform a post to create the user, before moving forward
//finally we keep it moving with next()


const findUser = async (req, res, next) => {
  try {
    const usertest = await usersController.getUserByUserlink(req, res, next);

    if (!usertest) {
      // console.log("Couldn't find them...creating but not inside catch block...")
      let createduser = await usersController.addUserByUserlink(req, res, next);
      req.user = createduser;
    } else {
      req.user = usertest;
    }
  } catch (err) {
    // console.log("Couldn't find them...creating from catch block...")
    let createduser = await usersController.addUserByUserlink(req, res, next);
    req.user = createduser;
  };
  next();
}

//just for testing
// const printUsername = async (req, res, next) => {
//   console.log("Username: " + req.user.username);
//   next();

// }

// module.exports = {findUser, printUsername};

module.exports = {findUser};