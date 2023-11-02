const app = require("./app");


port = process.env.port || 9800;
app.listen(port, () => {
  console.log("server started");
});
