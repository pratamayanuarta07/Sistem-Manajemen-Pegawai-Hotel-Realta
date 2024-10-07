'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createSchema("HR");
    await queryInterface.createTable('departments', {
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
      dept_id: {
        autoIncrement: true,
        unique: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      dept_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      dept_modified_date: {
        type: Sequelize.DATE,
        allowNull: true
      }
    },
    {
      schema : 'HR',
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('departments');
  }
};