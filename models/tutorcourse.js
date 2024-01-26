"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class TutorCourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TutorCourse.hasMany(models.TutorCourseAdditionalInformation, {
        foreignKey: "tutorCourseId",
      });
      TutorCourse.hasMany(models.TutorCourseFrequentlyQuestions, {
        foreignKey: "tutorCourseId",
      });
      TutorCourse.hasMany(models.TutorOrder, { foreignKey: "tutorCourseId" });
    }
  }
  TutorCourse.init(
    {
      tutorId: DataTypes.INTEGER,
      minimumHours: DataTypes.INTEGER,
      maximumHours: DataTypes.INTEGER,
      pricePerHour: DataTypes.FLOAT,
      description: DataTypes.TEXT,
      tags: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "TutorCourse",
    }
  );
  return TutorCourse;
};
