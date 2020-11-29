const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.db, process.env.login, process.env.password, {
  host: process.env.host,
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const UserModel = require('./model/user')(sequelize, DataTypes);
const FileModel = require('./model/file')(sequelize, DataTypes);

sequelize.authenticate().then(() => console.log('Connected'))
sequelize.sync().then(() => { console.log('User table hsa been created') }) //{ force: true }

module.exports = {
  UserModel,
  FileModel
}

