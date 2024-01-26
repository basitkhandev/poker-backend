'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TutorOrders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tutorId: {
        type: Sequelize.INTEGER
      },
      tutorCourseId: {
        type: Sequelize.INTEGER
      },
      orderTotal: {
        type: Sequelize.FLOAT
      },
      orderAge: {
        type: Sequelize.INTEGER
      },
      orderStatus: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TutorOrders');
  }
};