const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("digikull", "admin", "ZOv6UEsd", {
  host: "mysql-152415-0.cloudclusters.net",
  port: "19286",
  dialect: "mysql",
});

const User = sequelize.define("data", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
  },
});

const createUser = async (data) => {
  return await User.create(data);
};

const getUser = async (id) => {
  return await User.findAll({
    where: {
      id: id,
    },
  });
};
const getAllUser = async (data) => {
  return await User.findAll();
};
const updateUser = async (data,userId) => {
  return await User.update(
    { ...data },
    {
      where: {
        id: userId,
      },
    }
  );
};
const deleteUser = async (id) => {
  return await User.destroy({
    where:{
      id:id
    }
  });
};

module.exports = {
  createUser,
  getUser,
  getAllUser,
  updateUser,
  deleteUser,
};
