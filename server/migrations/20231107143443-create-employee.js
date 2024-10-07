'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createSchema("HR");
    await queryInterface.createTable('employees', {
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
      emp_id: {
        autoIncrement: true,
        unique: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      emp_national_id: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      },
      emp_birth_date: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      emp_martial_status: {
        type: Sequelize.CHAR(1),
        allowNull: true
      },
      emp_gender: {
        type: Sequelize.CHAR(1),
        allowNull: true
      },
      emp_hire_date: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      emp_salaries_flag: {
        type: Sequelize.CHAR(1),
        allowNull: true
      },
      emp_vacarion_hours: {
        type: Sequelize.SMALLINT,
        allowNull: true
      },
      emp_sickleave_hours: {
        type: Sequelize.SMALLINT,
        allowNull: true
      },
      emp_current_flag: {
        type: Sequelize.SMALLINT,
        allowNull: true
      },
      emp_photo: {
        type: Sequelize.STRING,
        allowNull: true
      },
      emp_modified_date: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      emp_joro_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references:{
          model:{
            tableName:"job_roles",
            schema:'HR'
          },
          key:"job_id"
        }
      },
      emp_fullname: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
      }
    },
    {
      schema : 'HR',
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('employees');
  }
};