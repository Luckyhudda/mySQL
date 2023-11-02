const app = require("./app");
const Sequelize = require("./db/mySql");

connectMySql = async () => {
  try {
    await Sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
connectMySql();


port = process.env.port || 9800;
app.listen(port, () => {
  console.log("server started");
});
