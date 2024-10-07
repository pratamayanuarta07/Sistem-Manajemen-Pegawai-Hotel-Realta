'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class work_order_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      work_order_details.belongsTo(models.employee, { foreignKey: "wode_emp_id"});
      work_order_details.belongsTo(models.facilities, { foreignKey: "wode_faci_id"});
      work_order_details.belongsTo(models.service_task, { foreignKey: "wode_seta_id"});
      work_order_details.belongsTo(models.work_orders, { foreignKey: "wode_woro_id"});
    }
  }
  work_order_details.init({
    wode_id: DataTypes.INTEGER,
    wode_task_name: DataTypes.STRING,
    wode_status: DataTypes.STRING,
    wode_start_date: DataTypes.DATE,
    wode_end_date: DataTypes.DATE,
    wode_notes: DataTypes.STRING,
    wode_emp_id: DataTypes.INTEGER,
    wode_seta_id: DataTypes.INTEGER,
    wode_faci_id:DataTypes.INTEGER,
    wode_woro_id: DataTypes.INTEGER,
  }, {
    sequelize,
    schema : 'HR',
    modelName: 'work_order_details',
  });
  return work_order_details;
};