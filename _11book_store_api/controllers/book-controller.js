const Book = require("../models/books");

const getAllBooks = async (req, res) => {
  try {
    const allBook = await Book.find({});
    if (allBook?.length > 0) {
      res.status(200).json({
        success: true,
        message: "All data have been fetched!",
        data: allBook,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Data did not fetched!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something is wrong!",
    });
  }
};
const getSingleBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);
    if (!book) {
      res.status(404).json({
        success: false,
        message: "Book is not found!",
      });
    }
    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something is wrong!",
    });
  }
};
const addBook = async (req, res) => {
  try {
    const book = req.body;
    const addBook = await Book.create(book);

    if (book) {
      res.status(201).json({
        success: true,
        message: "Book has been added!",
        data: addBook,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
const updateBook = async (req, res) => {
  try {
    const data = req.body;
    const bookId = req.params.id;
    const book = await Book.findByIdAndUpdate(bookId, data, {
      new: true,
    });
    if (!book) {
      res.status(404).json({
        success: false,
        message: "Book is not found!",
      });
    }
    res.status(200).json({
      success: true,
      message: "Book is updated",
      data: book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something is wrong!",
    });
  }
};
const deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findByIdAndDelete(bookId);
    if (!book) {
      res.status(404).json({
        success: false,
        message: "Book is not found!",
      });
    }
    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something is wrong!",
    });
  }
};
module.exports = {
  getAllBooks,
  getSingleBook,
  addBook,
  updateBook,
  deleteBook,
};
