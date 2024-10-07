'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class service_task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      service_task.hasMany(models.work_order_details, { foreignKey: "wode_seta_id"});
    }
  }
  service_task.init({
    seta_id: DataTypes.INTEGER,
    seta_name: DataTypes.STRING,
    seta_seq: DataTypes.INTEGER,
  }, {
    sequelize,
    schema : 'HR',
    modelName: 'service_task',
  });
  return service_task;
};