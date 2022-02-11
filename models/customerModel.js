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
    rooms: {
      type: DataTypes.STRING,
      get: function () {
        return JSON.parse(this.getDataValue("rooms"));
      },
      set: function (val) {
        return this.setDataValue("rooms", JSON.stringify(val));
      },
    },    
  });

  return Customer;
};
