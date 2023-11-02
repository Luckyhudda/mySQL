const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("digikull", "admin", "ZOv6UEsd", {
  host: "mysql-152415-0.cloudclusters.net",
  port: "19286",
  dialect: "mysql",
});

module.exports = sequelize;

