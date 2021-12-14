const { postgreDb } = require("../loaders/postgreDb");
const Unit = postgreDb.units;
const op = postgreDb.Sequelize.Op;

const createService = (unit) => {
  return Unit.create(unit);
};

const editUnitService = (id, unit) => {
  return Unit.update(unit, {
    where: { id: id },
  });
};

const getByFactoryIdService = (id) => {
  return Unit.findAll({ where: { factory_id: id } });
};

const deleteUnitService = (id) => {
  return Unit.destroy({ where: { id: id } });
};

module.exports = {
  createService,
  getByFactoryIdService,
  editUnitService,
  deleteUnitService,
};
