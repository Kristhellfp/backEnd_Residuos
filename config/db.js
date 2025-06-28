const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'ecoheroes_db',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || '2007',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: false,
    define: {
      freezeTableName: true
    }
  }
);

module.exports = sequelize;
