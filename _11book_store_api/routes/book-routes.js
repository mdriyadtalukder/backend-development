const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  getSingleBook,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/book-controller");

router.get("/books", getAllBooks);
router.get("/books/:id", getSingleBook);
router.post("/add", addBook);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);

module.exports = router;
