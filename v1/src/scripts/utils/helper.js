const CryptoJS = require("crypto-js");
const JWT = require("jsonwebtoken");

const passwordToHash = (password) => {
  return CryptoJS.HmacSHA256(
    password,
    CryptoJS.HmacSHA1(password, process.env.PASSWORD_SALT).toString()
  ).toString();
};

const generateAccessToken = (user) => {
  return JWT.sign({ user }, process.env.JWT_SECRET, { expiresIn: "1h" });
};
const generateRefreshToken = (user) => {
  return JWT.sign({ user }, process.env.JWT_REFRESH_SECRET);
};

module.exports = {
  passwordToHash,
  generateAccessToken,
  generateRefreshToken,
};
