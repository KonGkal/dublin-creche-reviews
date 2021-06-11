module.exports = (sequelize, DataTypes) => {
  const School = sequelize.define("School", {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        is: /^\w{2,}$/,
      },
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
  });

  School.associate = (db) => {
    db.School.hasMany(db.Review);
  };

  return School;
};
