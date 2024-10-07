'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createSchema("HR");
    await queryInterface.createTable('shifts', {
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
      shift_id: {
        autoIncrement: true,
        unique: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      shift_name: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      },
      shift_start_time: {
        type: Sequelize.TIME,
        allowNull: true,
        unique: true
      },
      shift_end_time: {
        type: Sequelize.TIME,
        allowNull: true,
        unique: true
      }
    },
    {
      schema : 'HR',
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('shift');
  }
};