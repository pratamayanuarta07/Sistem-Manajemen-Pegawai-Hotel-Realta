'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employee_department_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      employee_department_history.belongsTo(models.department, { foreignKey: "edhi_dept_id"});
      employee_department_history.belongsTo(models.employee, { as: "edhi_emp", foreignKey: "edhi_emp_id"});
      employee_department_history.belongsTo(models.shift, { foreignKey: "edhi_shift_id"});
    }
  }
  employee_department_history.init({
    edhi_id: DataTypes.INTEGER,
    edhi_emp_id: DataTypes.INTEGER,
    edhi_start_date: DataTypes.DATEONLY,
    edhi_end_date: DataTypes.DATEONLY,
    edhi_modified_date: DataTypes.DATEONLY,
    edhi_dept_id: DataTypes.INTEGER,
    edhi_shift_id: DataTypes.INTEGER,
  }, {
    sequelize,
    schema : 'HR',
    modelName: 'employee_department_history',
  });
  return employee_department_history;
};