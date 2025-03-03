const { ForeignKeyConstraintError } = require("sequelize");
const { Book } = require("../models");

class BookController {
  static index = async (req, res, next) => {
    try {
      const books = await Book.findAll();
      res.status(200).json({
        success: true,
        message: "Buku berhasil didapat",
        data: books,
      });
    } catch (error) {
      next(error);
    }
  };

  static show = async (req, res, next) => {
    try {
      const book = await Book.findByPk(req.params.id);

      if (!book) {
        return res.status(404).json({
          success: false,
          message: "Buku tidak ditemukan",
        });
      }

      res.status(200).json({
        success: true,
        message: "Buku berhasil didapat",
        data: book,
      });
    } catch (error) {
      next(error);
    }
  };

  static store = async (req, res, next) => {
    try {
      const newBook = await Book.create(req.body);
      res.status(201).json({
        success: true,
        message: "Buku berhasil ditambahkan",
        data: newBook,
      });
    } catch (error) {
      if (error instanceof ForeignKeyConstraintError) {
        return res.status(400).json({
          success: false,
          message: "category_id atau user_id tidak valid",
        });
      }

      next(error);
    }
  };

  static update = async (req, res, next) => {
    try {
      const book = await Book.findByPk(req.params.id);

      if (!book) {
        return res.status(404).json({
          success: false,
          message: "Buku tidak ditemukan",
        });
      }

      await book.update(req.body);
      res.status(200).json({
        success: true,
        message: "Buku berhasil di-update",
        data: book,
      });
    } catch (error) {
      if (error instanceof ForeignKeyConstraintError) {
        return res.status(400).json({
          success: false,
          message: "category_id atau user_id tidak valid",
        });
      }

      next(error);
    }
  };

  static destroy = async (req, res, next) => {
    try {
      const book = await Book.findByPk(req.params.id);

      if (!book) {
        return res.status(404).json({
          success: false,
          message: "Buku tidak ditemukan",
        });
      }

      await book.destroy();
      res.status(200).json({
        success: true,
        message: "Buku berhasil dihapus",
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = BookController;
