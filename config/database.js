const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('admindashboard', 'postgres', 'bjk1903', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
