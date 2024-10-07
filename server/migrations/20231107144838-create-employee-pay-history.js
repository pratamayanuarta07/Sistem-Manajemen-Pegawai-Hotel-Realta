'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createSchema("HR");
    await queryInterface.createTable('employee_pay_histories', {
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
      ephi_emp_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references:{
          model:{
            tableName:"employees",
            schema:'HR'
          },
          key:"emp_id"
        }
      },
      ephi_rate_change_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        primaryKey: true
      },
      ephi_rate_salary: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      ephi_pay_frequence: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      ephi_modified_date: {
        type: Sequelize.DATEONLY,
        allowNull: true
      }
    },
    {
      schema : 'HR',
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('employee_pay_histories');
  }
};