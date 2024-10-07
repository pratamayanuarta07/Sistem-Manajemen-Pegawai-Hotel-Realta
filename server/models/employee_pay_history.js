'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employee_pay_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      employee_pay_history.belongsTo(models.employee, { foreignKey: "ephi_emp_id"});
    }
  }
  employee_pay_history.init({
    ephi_emp_id: DataTypes.INTEGER,
    ephi_rate_change_date: DataTypes.DATEONLY,
    ephi_rate_salary: DataTypes.DECIMAL,
    ephi_pay_frequence: DataTypes.INTEGER,
    ephi_modified_date: DataTypes.DATEONLY,
  }, {
    sequelize,
    schema : 'HR',
    modelName: 'employee_pay_history',
  });
  return employee_pay_history;
};