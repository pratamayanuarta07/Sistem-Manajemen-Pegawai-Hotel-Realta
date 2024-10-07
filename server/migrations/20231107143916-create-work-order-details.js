'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createSchema("HR");
    await queryInterface.createTable('work_order_details', {
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
      wode_id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      wode_task_name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      wode_status: {
        type: Sequelize.STRING,
        allowNull: true
      },
      wode_start_date: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      wode_end_date: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      wode_notes: {
        type: Sequelize.STRING,
        allowNull: true
      },
      wode_emp_id: {
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
      wode_seta_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references:{
          model:{
            tableName:"service_tasks",
            schema:'HR'
          },
          key:"seta_id"
        }
      },
      wode_faci_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references:{
          model:{
            tableName:"facilities",
            schema:'HR'
          },
          key:"faci_id"
        }
      },
      wode_woro_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references:{
          model:{
            tableName:"work_orders",
            schema:'HR'
          },
          key:"woro_id"
        }
      }
    },
    {
      schema : 'HR',
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('work_order_details');
  }
};