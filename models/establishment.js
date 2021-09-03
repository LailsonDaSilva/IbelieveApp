'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Establishment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  Establishment.init({
    name: DataTypes.STRING,
    photo: DataTypes.BLOB,
    address: DataTypes.STRING,
    discount: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Establishment',
  });
  return Establishment;
};