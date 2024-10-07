'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createSchema("HR");
    await queryInterface.createTable('employee_department_histories', {
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
      edhi_id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      edhi_emp_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references:{
          model:{
            tableName:"employees",
            schema:'HR'
          },
          key:"emp_id"
        }
      },
      edhi_start_date: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      edhi_end_date: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      edhi_modified_date: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      edhi_dept_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references:{
          model:{
            tableName:"departments",
            schema:'HR'
          },
          key:"dept_id"
        }
      },
      edhi_shift_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references:{
          model:{
            tableName:"shifts",
            schema:'HR'
          },
          key:"shift_id"
        }
      }
    },
    {
      schema : 'HR',
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('employee_department_histories');
  }
};