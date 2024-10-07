'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      employee.belongsTo(models.job_role, { foreignKey: "emp_joro_id"});
      employee.hasMany(models.work_order_details, { foreignKey: "wode_emp_id"});
      employee.hasMany(models.employee_pay_history, { foreignKey: "ephi_emp_id"});
      employee.hasMany(models.employee_department_history, { foreignKey: "edhi_emp_id"});
    }
  }
  employee.init({
    emp_id: DataTypes.INTEGER,
    emp_national_id:DataTypes.STRING,
    emp_birth_date: DataTypes.DATE,
    emp_martial_status: DataTypes.CHAR(1),
    emp_gender: DataTypes.CHAR(1),
    emp_hire_date:DataTypes.DATE,
    emp_salaries_flag: DataTypes.CHAR(1),
    emp_vacarion_hours: DataTypes.SMALLINT,
    emp_sickleave_hours: DataTypes.SMALLINT,
    emp_current_flag: DataTypes.SMALLINT,
    emp_photo: DataTypes.STRING,
    emp_modified_date: DataTypes.DATE,
    emp_joro_id: DataTypes.INTEGER,
    emp_fullname: DataTypes.STRING,
  }, {
    sequelize,
    schema : 'HR',
    modelName: 'employee',
  });
  return employee;
};