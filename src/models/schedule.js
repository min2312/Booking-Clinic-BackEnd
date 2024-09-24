'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Schedule.init({
    CurrentNumber: DataTypes.INTEGER,
    MaxNumber: DataTypes.INTEGER,
    Date: DataTypes.DATE,
    timeType: DataTypes.STRING,
    DoctorId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};