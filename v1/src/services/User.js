const User = require("../models/User");

const createService = (data) => {
  const user = new User(data);
  return user.save();
};

const loginService = (data) => {
  return User.findOne(data);
};

const listService = () => {
  return User.find({});
};

module.exports = {
  createService,
  listService,
  loginService,
};
