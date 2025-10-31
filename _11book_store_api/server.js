require("dotenv").config(); //automatically refresh will be if something is updated
const express = require("express");
const bookRoutes = require("./routes/book-routes");

const app = express();
port = process.env.PORT || 3000;

//connect book
const connectDB = require("./database/db");
connectDB();

//middleware
app.use(express.json());

//routes..like /api/books,/api/add etc
app.use("/api", bookRoutes);

app.listen(port, () => {
  console.log(`server is now running on ${port}`);
});
