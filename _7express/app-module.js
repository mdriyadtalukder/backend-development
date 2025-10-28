const express = require("express");
const app = express();

app.set("view engine", "ejs"); //This line tells Express:“Hey, I’m going to use EJS as my view/template engine.”

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/api/data", (req, res) => {
  res.json({
    message: "data recieved",
    data: req.body,
  });
});

//middleware
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("sonething went wrong");
});
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
