const Sequelize = require("sequelize");
const dbConf = require("./config/database");

const User = require("./models/Usuario");
const Cidade = require("./models/Cidade");
const Estado = require("./models/Estado");
const Marca = require("./models/Marca");
const Modelo = require("./models/Modelo");
const Revendedore = require("./models/Revendedore");
const Veiculo = require("./models/Veiculo");

const conn = new Sequelize(dbConf);

User.init(conn);
Cidade.init(conn);
Estado.init(conn);
Marca.init(conn);
Modelo.init(conn);
Revendedore.init(conn);
Veiculo.init(conn);

module.exports = conn;