const { Jwt } = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = () => {
    return async (req, res, next) =>{
        try{
            const token = req.header("Authorization")?.split("")[1];

            if (!token) {
                return res.status(401).json({message:"Access denied, no token provide"});

            }

            const decoded = Jwt.verify(token, process.env.JWT_SECRET)
            req.userjwt = decoded;
            if (decoded.role === "Superadmin"){
                return next()
            }

            if (role.length && ! role.includes(decoded.role)){
                return res.status(403).json({message:"Access denied. You do not have permision to access this resource"})

            }
            req.userjwt = decoded
            next();
        } catch (error){
            console.log(error);
            res.status(401).json({ message: "Invalid Token" });
        }
    }
}

function generateToken(user) {
    const payload = {
      _id: user._id,
      email: user.email,
      role: user.role,
      team_id: user.team_id,
      status:user.status 
    };
  
    // Sign the token with a secret key and set an expiration time
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "12h" });
  }

  function generateRefreshToken(user) {
    const payload = {
      _id: user._id,
      email: user.email,
      role: user.role,
      team_id: user.team_id,
      status:user.status // Optional, useful for team-based authorization
    };
  
    // Sign the token with a secret key and set an expiration time
    return jwt.sign(payload, process.env.REFRESH_SECRET_KEY, { expiresIn: "7d" });

}

module.exports = { authMiddleware, generateToken, generateRefreshToken };
