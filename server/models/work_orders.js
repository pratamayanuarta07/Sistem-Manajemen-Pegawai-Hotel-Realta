'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class work_orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      work_orders.belongsTo(models.users, { foreignKey: "woro_user_id"});
      work_orders.hasMany(models.work_order_details, { foreignKey: "wode_woro_id"});
    }
  }
  work_orders.init({
    woro_id: DataTypes.INTEGER,
    woro_start: DataTypes.DATE,
    woro_status: DataTypes.STRING,
    woro_user_id: DataTypes.INTEGER
  }, {
    sequelize,
    schema : 'HR',
    modelName: 'work_orders',
  });
  return work_orders;
};