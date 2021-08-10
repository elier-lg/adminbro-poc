'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Employees.init({
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    entitlement: DataTypes.STRING,
    isOnbench: DataTypes.NUMBER,
    createdAt: DataTypes.STRING,
    updatedAt: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Employees',
  });
  return Employees;
};