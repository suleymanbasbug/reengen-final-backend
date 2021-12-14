const { postgreDb } = require("../loaders/postgreDb");
const Factory = postgreDb.factories;
const op = postgreDb.Sequelize.Op;

const createService = (factory) => {
  return Factory.create(factory);
};

const listService = () => {
  return Factory.findAll({});
};

const editFactoryService = (id, factory) => {
  return Factory.update(factory, {
    where: { id: id },
  });
};

const deleteFactoryService = (id) => {
  return Factory.destroy({
    where: { id: id },
  });
};

module.exports = {
  createService,
  listService,
  editFactoryService,
  deleteFactoryService,
};
