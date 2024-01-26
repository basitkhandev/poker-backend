"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Updated association with correct foreignKey and targetKey
      Chat.belongsTo(models.User, {
        foreignKey: "senderId", // foreign key in the Chat model
        targetKey: "id", // target key in the User model
        as: "sender", // alias for the association
      });

      Chat.belongsTo(models.User, {
        foreignKey: "receiverId", // foreign key in the Chat model
        targetKey: "id", // target key in the User model
        as: "receiver", // alias for the association
      });
    }
  }
  Chat.init(
    {
      senderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "id",
        },
      },
      receiverId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Chat",
    }
  );
  return Chat;
};
