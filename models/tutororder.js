"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TutorOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TutorOrder.hasOne(models.TutorCourse, { foreignKey: "id" });
    }
  }
  TutorOrder.init(
    {
      tutorId: DataTypes.INTEGER,
      tutorCourseId: DataTypes.INTEGER,
      orderTotal: DataTypes.FLOAT,
      orderAge: DataTypes.INTEGER,
      orderStatus: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "TutorOrder",
    }
  );
  return TutorOrder;
};
