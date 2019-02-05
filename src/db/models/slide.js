'use strict';
module.exports = (sequelize, DataTypes) => {
  var Slide = sequelize.define('Slide', {
    title: DataTypes.STRING,
    minutes: DataTypes.INTEGER,
    seconds: DataTypes.INTEGER,
    backgroundColor: DataTypes.STRING
  }, {});
  Slide.associate = function(models) {
    // associations can be defined here
  };
  return Slide;
};