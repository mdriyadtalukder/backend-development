const express = require("express");
const app = express();
app.use(express.json()); //It’s a middleware that tells Express to automatically parse JSON data coming from the client (like from POST, PUT, or PATCH requests).

const books = [
  {
    id: 1,
    name: "book1",
  },
  {
    id: 2,
    name: "book2",
  },
  {
    id: 3,
    name: "book3",
  },
];

app.get("/", (req, res) => {
  res.json({
    massage: "This is home page",
  });
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const bookid = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookid);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({
      massage: "book not found",
    });
  }
});

app.post("/add", (req, res) => {
  const book = {
    id: books.length + 1,
    name: `book${books.length + 1}`,
  };
  books.push(book);
  res.status(202).json({
    data: book,
    message: "book is added",
  });
});

app.put("/update/:id", (req, res) => {
  const bookid = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookid);
  //   console.log(book);
  //   console.log(req.body);

  if (book) {
    book.name = req?.body?.name || book.name;
    res.status(200).json({
      data: book,
      message: "book updated!",
    });
  } else {
    res.status(404).json({
      message: "book did not update",
    });
  }
});

app.delete("/delete/:id", (req, res) => {
  const book = books.findIndex((b) => b.id === parseInt(req.params.id));
  console.log(book);
  if (book !== -1) {
    const mybook = books.splice(book, 1);
    res.status(200).json({
      message: "book deleted",
      data: mybook[0],
    });
  } else {
    res.status(404).json({
      message: "book did not delete",
    });
  }
});
app.listen("3000", () => {
  console.log("my server is running on port 3000");
});
