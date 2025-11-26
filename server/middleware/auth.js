const jwt = require("jsonwebtoken");
const User = require("./models/user");

module.exports = async (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.sendStatus(403);

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.sendStatus(403);
  }
};
