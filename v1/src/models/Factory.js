module.exports = (sequelize, Sequelize) => {
  const Factory = sequelize.define("factory", {
    name: {
      type: Sequelize.STRING,
    },
    membership_expiration_date: {
      type: Sequelize.DATEONLY,
    },
    membership_date: {
      type: Sequelize.DATEONLY,
    },
    number_of_employees: {
      type: Sequelize.INTEGER,
    },
    special_member: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Factory;
};
