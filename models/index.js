const dbConfig = require("../config/dbConfig.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false, //it will overcome the error occurs in this application

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

//authenticate and connect the DB
sequelize
  .authenticate()
  .then(() => {
    console.log("connected...");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customers = require("./customerModel.js")(sequelize, DataTypes);
db.rooms = require("./roomModel.js")(sequelize, DataTypes);

db.sequelize
  .sync({ force: false }) // to avoid loosing data
  .then(() => {
    console.log("yes re-sync done!");
  });

module.exports = db;