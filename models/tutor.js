"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tutor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tutor.hasMany(models.TutorExpertise, { foreignKey: "tutorId" });
      Tutor.hasMany(models.TutorRating, { foreignKey: "tutorId" });
      Tutor.hasMany(models.TutorCourse, { foreignKey: "tutorId" });
      Tutor.hasMany(models.TutorOrder, { foreignKey: "tutorId" });
      Tutor.hasMany(models.TutorFrequentlyQuestion, { foreignKey: "tutorId" });
    }
  }
  Tutor.init(
    {
      name: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Tutor",
    }
  );
  return Tutor;
};
