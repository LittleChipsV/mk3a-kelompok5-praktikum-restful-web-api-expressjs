"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Loan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Loan.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
        onDelete: "CASCADE",
      });
      Loan.belongsTo(models.Book, {
        foreignKey: "book_id",
        as: "book",
        onDelete: "CASCADE",
      });
    }
  }

  Loan.init(
    {
      loan_date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: true,
          isDate: true,
        },
      },
      return_date: { type: DataTypes.DATE, allowNull: true },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          isIn: {
            args: [["dipinjam", "dikembalikan", "terlambat"]],
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Loan",
      tableName: "loans",
      underscored: true,
      createdAt: false,
      updatedAt: false,
      deletedAt: false,
    }
  );

  return Loan;
};
