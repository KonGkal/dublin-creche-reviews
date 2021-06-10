const { Sequelize } = require ('sequelize');
require("dotenv").config();
const fs = require('fs');
const path = require('path');

const config = {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT
};

const sequelize = new Sequelize (process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, config);

const db = {};

const files = fs.readdirSync(__dirname); 

for (const file of files) {

  if (file !== 'index.js') {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  }

}

for (const model in db) {
  if (db[model].associate) db[model].associate(db);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
