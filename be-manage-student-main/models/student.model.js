const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Student = sequelize.define('Student', {
  ten: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tuoi: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dia_chi: {
    type: DataTypes.TEXT,
  }
}, {
  tableName: 'students',
  timestamps: false,
});

module.exports = Student;
