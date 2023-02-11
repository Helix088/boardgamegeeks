// const jose = require('jose');


// const validateJWT = async (req, res, next) => {
//     const token = req.headers.authorization;
//     const stripped = token.replace("Bearer ", "");
//     const secret = new TextEncoder().encode(process.env.SECRET)
//   // console.log(stripped);
//   if (!token) {
//     return res.status(401).send({
//       error: 'Not authorized to change data without login.',
//       login: "https://boardgamegeeks-onrender.com/login"
//     });
//   }


//   const valid = await jose.jwtVerify(stripped, secret);
//   // console.log(valid);
//   if (!valid) {
//     return res.status(401).send({
//       error: "Token can't be verified.",
//       login: "https://boardgamegeeks-onrender.com/login"
//     });
//   }

//   next()
// }

// module.exports = {validateJWT}

// const jose = require('jose');


// const validateJWT = async (req, res, next) => {
//     const token = req.headers.authorization;
//     const stripped = token.replace("Bearer ", "");
//     const secret = new TextEncoder().encode(process.env.SECRET)
//   // console.log(stripped);
//   if (!token) {
//     return res.status(401).send({
//       error: 'Not authorized to change data without login.',
//       login: "https://boardgamegeeks-onrender.com/login"
//     });
//   }

//   try {
//     const valid = await jose.jwtVerify(stripped, secret);
//     // console.log(valid);
//     if (!valid) {
//       return res.status(401).send({
//         error: "Token can't be verified.",
//         login: "https://boardgamegeeks-onrender.com/login"
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     return res.status(500).send({
//       error: 'An error occurred while verifying the token.'
//     });
//   }

//   next()
// }

// module.exports = {validateJWT}


const jose = require('jose');


const validateJWT = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send({
            error: 'Not authorized to change data without login.',
            login: "https://boardgamegeeks-onrender.com/login"
        });
    }
    const stripped = token.replace("Bearer ", "");
    const secret = new TextEncoder().encode(process.env.SECRET)

  // console.log(stripped);

  const valid = await jose.jwtVerify(stripped, secret);
  // console.log(valid);
  if (!valid) {
    return res.status(401).send({
      error: "Token can't be verified.",
      login: "https://boardgamegeeks-onrender.com/login"
    });
  }

  next()
}

module.exports = {validateJWT}