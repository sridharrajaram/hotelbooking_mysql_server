module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define("room", {
    roomtype: {
      type: DataTypes.ENUM,
      values: [
        "DELUX_DOUBLE_ROOM",
        "DELUX_SINGLE_ROOM",
        "LUXURY_SINGLE_ROOM",
        "LUXURY_DOUBLE_ROOM",
      ],
    },
    rooms: {
      type: DataTypes.INTEGER,
    },
    beds: {
      type: DataTypes.INTEGER,
    },
    utilitise: { 
      type: DataTypes.STRING, 
      get: function() {
          return JSON.parse(this.getDataValue('utilitise'));
      }, 
      set: function(val) {
          return this.setDataValue('utilitise', JSON.stringify(val));
      }
  },
    price: {
      type: DataTypes.INTEGER,
    },
    image: { 
      type: DataTypes.STRING, 
      get: function() {
          return JSON.parse(this.getDataValue('image'));
      }, 
      set: function(val) {
          return this.setDataValue('image', JSON.stringify(val));
      }
  },
    description: {
      type: DataTypes.STRING,
    },
  });

  Room.associate = models => {
    Room.hasMany(models.Customer, {
      onDelete:"cascade"
    });
  }

  return Room;
};
