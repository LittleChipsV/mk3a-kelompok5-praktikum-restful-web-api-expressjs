const express = require("express");
const router = express.Router();
const BookController = require("../controllers/book");
const validateRequest = require("../middleware/validateRequest");
const bookSchema = require("../validations/book");

router.get("/", BookController.index);
router.get("/:id", BookController.show);
router.post("/", validateRequest(bookSchema), BookController.store);
router.put("/:id", validateRequest(bookSchema), BookController.update);
router.delete("/:id", BookController.destroy);

module.exports = router;
