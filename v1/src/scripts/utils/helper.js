const CryptoJS = require("crypto-js");
const JWT = require("jsonwebtoken");

const passwordToHash = (password) => {
  return CryptoJS.HmacSHA256(
    password,
    CryptoJS.HmacSHA1(
      password,
      "97f5847340685bfff3904c01ef0c55b363501eaf"
    ).toString()
  ).toString();
};

const generateAccessToken = (user) => {
  return JWT.sign({ user }, "jwt_secret", { expiresIn: "1h" });
};
const generateRefreshToken = (user) => {
  return JWT.sign({ user }, "jwt_refresh_secret");
};

module.exports = {
  passwordToHash,
  generateAccessToken,
  generateRefreshToken,
};
