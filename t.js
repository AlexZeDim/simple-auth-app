const { Sequelize } = require('sequelize');

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

(async function T () {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})()

