'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TutorCourseAdditionalInformations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tutorCourseId: {
        type: Sequelize.INTEGER
      },
      gameType: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      stakes: {
        type: Sequelize.STRING
      },
      additionalScreenShots: {
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
    await queryInterface.dropTable('TutorCourseAdditionalInformations');
  }
};