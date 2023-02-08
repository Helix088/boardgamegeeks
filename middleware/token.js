const jose = require('jose');


const validateJWT = async (req, res, next) => {
  
    const token = req.headers.authorization;
    const stripped = token.replace("Bearer ", "");
    const secret = new TextEncoder().encode("leedleleedleleedlelee")
  console.log(stripped);
  if (!token) {
    return 
  }
  // const key = await jose.JWK.createKey("oct", "leedleleedleleedlelee", {use: "sig"})

  const valid = await jose.jwtVerify(stripped, secret);
  // console.log(valid);
  if (valid) {
    next()
  } else {
    // console.log("You're a buttmunch")
  }
}

module.exports = {validateJWT}