const {
  createService,
  listService,
  loginService,
} = require("../services/User");
const httpStatus = require("http-status");
const {
  passwordToHash,
  generateAccessToken,
  generateRefreshToken,
} = require("../scripts/utils/helper");
const JWT = require("jsonwebtoken");

const create = (req, res) => {
  req.body.password = passwordToHash(req.body.password);
  createService(req.body)
    .then((response) => {
      res.status(httpStatus.CREATED).send(response);
    })
    .catch((error) => {
      console.log(error);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    });
};

const login = (req, res) => {
  req.body.password = passwordToHash(req.body.password);
  loginService(req.body)
    .then((user) => {
      if (!user) {
        return res
          .status(httpStatus.NOT_FOUND)
          .send({ message: "User not found" });
      }

      user = {
        ...user.toObject(),
        tokens: {
          access_token: generateAccessToken(user),
          refresh_token: generateRefreshToken(user),
        },
      };
      delete user.password;
      res.status(httpStatus.OK).send(user);
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    });
};

const index = (req, res) => {
  listService()
    .then((response) => {
      res.status(httpStatus.OK).send(response);
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    });
};

const getAuthUser = (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) {
    return res
      .status(httpStatus.UNAUTHORIZED)
      .send({ message: "Token is missing" });
  }

  JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(httpStatus.FORBIDDEN)
        .send({ message: "Token is invalid" });
    }
    req.user = decoded;
    req.user.user.token = token;
    res.status(httpStatus.OK).send(req.user);
  });
};

module.exports = {
  create,
  index,
  login,
  getAuthUser,
};
