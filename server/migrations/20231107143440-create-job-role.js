'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createSchema("HR");
    await queryInterface.createTable('job_roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      job_id: {
        autoIncrement: true,
        unique: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      joro_name: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      },
      joro_modified_date: {
        type: Sequelize.DATE,
        allowNull: true
      }
    },
    {
      schema : 'HR',
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('job_roles');
  }
};