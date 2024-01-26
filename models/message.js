"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Message.belongsTo(models.Chat, {
        foreignKey: "chatId", // foreign key in the Chat model
        targetKey: "id", // target key in the User model
      });
    }
  }
  Message.init(
    {
      chatId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Chat",
          key: "id",
        },
      },

      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Message",
    }
  );
  return Message;
};
