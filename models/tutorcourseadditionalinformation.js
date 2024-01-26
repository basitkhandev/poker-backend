'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TutorCourseAdditionalInformation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TutorCourseAdditionalInformation.init({
    tutorCourseId: DataTypes.INTEGER,
    gameType: DataTypes.STRING,
    type: DataTypes.STRING,
    stakes: DataTypes.STRING,
    additionalScreenShots: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TutorCourseAdditionalInformation',
  });
  return TutorCourseAdditionalInformation;
};