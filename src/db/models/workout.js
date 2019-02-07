'use strict';
module.exports = (sequelize, DataTypes) => {
  var Workout = sequelize.define('Workout', {
    title: DataTypes.STRING,
    lastUsed: DataTypes.DATEONLY,
    //slides: DataTypes.ARRAY,
    nextScheduled: DataTypes.DATEONLY
  }, {});
  Workout.associate = function(models) {
    // associations can be defined here
    
  };
  return Workout;
};