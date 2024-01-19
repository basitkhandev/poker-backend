'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TutorExpertise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TutorExpertise.init({
    tutorId: DataTypes.INTEGER,
    tags: DataTypes.STRING,
    games: DataTypes.STRING,
    gameTypes: DataTypes.STRING,
    stakes: DataTypes.STRING,
    additionalSS: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TutorExpertise',
  });
  return TutorExpertise;
};