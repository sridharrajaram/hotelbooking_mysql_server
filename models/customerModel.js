const roomModel = require("./roomModel");

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define("customer", {
    customerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
    },
    govtidentityProof: {
      type: DataTypes.INTEGER,
    },
  });

  return Customer;
};
