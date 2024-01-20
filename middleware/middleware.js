const jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) return res.sendStatus(401);
  const tokenParts = token.split(" ")[1];
  jwt.verify(
    tokenParts?.length > 1 ? tokenParts[1] : token,
    process.env.JWT_SECRET,
    (err, user) => {
      if (err) return res.sendStatus(403);

      req.user = user;
      next();
    }
  );
};

module.exports = authenticateJWT;
