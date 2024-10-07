'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class facilities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      facilities.hasMany(models.work_order_details, { foreignKey: "wode_faci_id"});
    }
  }
  facilities.init({
    faci_id: DataTypes.INTEGER,
    faci_name: DataTypes.STRING,
    faci_description: DataTypes.STRING,
    faci_max_number: DataTypes.INTEGER,
    faci_measure_unit: DataTypes.STRING,
    faci_room_number: DataTypes.STRING,
    faci_startdate: DataTypes.DATE,
    faci_enddate: DataTypes.DATE,
    faci_low_price: DataTypes.INTEGER,
    faci_high_price: DataTypes.INTEGER,
    faci_rate_price: DataTypes.INTEGER,
    faci_discount: DataTypes.INTEGER,
    faci_tax_rate: DataTypes.INTEGER,
    faci_modified_date: DataTypes.DATE,
  }, {
    sequelize,
    schema : 'HR',
    modelName: 'facilities',
  });
  return facilities;
};