const pg = require("pg");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  `wttvabna`,
  `wttvabna`,
  `E7OSpny02GdNRuhA1ohVUGluXPHeSY-e`,
  {
    host: `abul.db.elephantsql.com`,
    dialect: "postgres",
    dialectModule: pg,
  }
);

const postgreDb = {};

postgreDb.Sequelize = Sequelize;
postgreDb.sequelize = sequelize;

postgreDb.factories = require("../models/Factory")(sequelize, Sequelize);
postgreDb.units = require("../models/Unit")(sequelize, Sequelize);

module.exports = { postgreDb };
