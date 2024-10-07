'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createSchema("HR");
    await queryInterface.createTable('work_orders', {
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
      woro_id: {
        autoIncrement: true,
        unique: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      woro_start: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      woro_status: {
        type: Sequelize.STRING,
        allowNull: true
      },
      woro_user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName:"users",
            schema:'HR'
          },
          key:"user_id"
        }
      }
    },
    {
      schema : 'HR',
    }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('work_orders');
  }
};