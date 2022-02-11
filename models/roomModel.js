module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define("room", {
    roomtype: {
      type: DataTypes.ENUM(
        "DELUX_DOUBLE_ROOM",
        "DELUX_SINGLE_ROOM",
        "LUXURY_SINGLE_ROOM",
        "LUXURY_DOUBLE_ROOM"
      ),
    },
    rooms: {
      type: DataTypes.INTEGER,
    },
    beds: {
      type: DataTypes.INTEGER,
    },
    utilitise: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.NUMBER,
    },
    image: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  });

  return Room;
};
