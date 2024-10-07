'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class job_role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      job_role.hasMany(models.employee, { foreignKey: "emp_joro_id"});
    }
  }
  job_role.init({
    job_id: DataTypes.INTEGER,
    joro_name: DataTypes.STRING,
    joro_modified_date: DataTypes.DATEONLY,
  }, {
    sequelize,
    schema : 'HR',
    modelName: 'job_role',
  });
  return job_role;
};