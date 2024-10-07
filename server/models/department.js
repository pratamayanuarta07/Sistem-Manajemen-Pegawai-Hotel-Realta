'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      department.hasMany(models.employee_department_history, { foreignKey: "edhi_dept_id"});
    }
  }
  department.init({
    dept_id: DataTypes.INTEGER,
    dept_name: DataTypes.STRING,
    dept_modified_date: DataTypes.DATEONLY
  }, {
    sequelize,
    schema : 'HR',
    modelName: 'department',
  });
  return department;
};