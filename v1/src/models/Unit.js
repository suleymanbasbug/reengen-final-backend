module.exports = (sequelize, Sequelize) => {
  const Unit = sequelize.define("unit", {
    name: {
      type: Sequelize.STRING,
    },
    factory_id: {
      type: Sequelize.INTEGER,
    },
    start_date: {
      type: Sequelize.DATEONLY,
    },
    end_date: {
      type: Sequelize.DATEONLY,
    },
    usage_free: {
      type: Sequelize.INTEGER,
    },
    discounted_price: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Unit;
};
