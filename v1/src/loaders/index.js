const { connectMongoDb } = require("./mongoDb");
const { postgreDb } = require("./postgreDb");
module.exports = () => {
  connectMongoDb();
  postgreDb.sequelize
    .sync()
    .then(() => {
      console.log("Postgre Database connected");
    })
    .catch((x) => console.log(x));
};
