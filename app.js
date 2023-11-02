const express = require('express');

const app = express();
app.use(express.json());

const crudRoute = require("./route/route")

app.use('/',crudRoute);

module.exports = app;