"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.Book, {
        foreignKey: "book_id",
        as: "book",
        onDelete: "CASCADE",
      });
    }
  }

  Review.init(
    {
      rating: {
        type: DataTypes.TINYINT,
        allowNull: false,
        validate: {
          notNull: true,
          isInt: true,
          min: { args: [1] },
          max: { args: [5] },
        },
      },
      comment: { type: DataTypes.TEXT, allowNull: true },
    },
    {
      sequelize,
      modelName: "Review",
      tableName: "reviews",
      underscored: true,
      createdAt: true,
      updatedAt: false,
      deletedAt: false,
    }
  );

  return Review;
};
