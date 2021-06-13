module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define("Review", {
    facility: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        is: /[0-5]/,
      },
    },
    staff: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        is: /[0-5]/,
      },
    },
    services: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        is: /[0-5]/,
      },
    },
    overall: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    comment: {
      type: DataTypes.STRING,
    },
  });

  Review.associate = (db) => {
    db.Review.belongsTo(db.User, {
      foreignKey: { allowNull: false },
    });
  };

  return Review;
};
