'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shift extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      shift.hasMany(models.employee_department_history, { foreignKey: "edhi_shift_id"});
    }
  }
  shift.init({
    shift_id: DataTypes.INTEGER,
    shift_name: DataTypes.STRING,
    shift_start_time: DataTypes.TIME,
    shift_end_time: DataTypes.TIME
  }, {
    sequelize,
    schema : 'HR',
    modelName: 'shift',
  });
  return shift;
};