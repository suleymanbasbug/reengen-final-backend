const httpStatus = require("http-status");
const JWT = require("jsonwebtoken");
const authToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) {
    return res
      .status(httpStatus.UNAUTHORIZED)
      .send({ message: "Token is missing" });
  }

  JWT.verify(token, "jwt_secret", (err, decoded) => {
    if (err) {
      return res
        .status(httpStatus.FORBIDDEN)
        .send({ message: "Token is invalid" });
    }
    req.user = decoded;
    next();
  });
};

module.exports = authToken;
