module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  });

  return User;
};
