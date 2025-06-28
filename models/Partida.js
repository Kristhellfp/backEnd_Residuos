const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Partida = sequelize.define('Partida', {
  codigo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  activa: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: 'partidas',
  timestamps: false 
});

module.exports = Partida;
