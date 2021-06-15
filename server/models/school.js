module.exports = (sequelize, DataTypes) => {
  const School = sequelize.define("School", {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lat: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    lng: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
  });

  School.associate = (db) => {
    db.School.hasMany(db.Review);
  };

  return School;
};
