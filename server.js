const express = require("express");
const Sequelize = require("sequelize");

// routes
const routes = require("./src/routes");

// config
const dbConfig = require("./src/config/database");

// models
const User = require("./src/models/user");

// connection database 
const connection = new Sequelize(dbConfig);

const app = express();

User.init(connection);

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log("server online in port 3333"));

module.exports = connection;
