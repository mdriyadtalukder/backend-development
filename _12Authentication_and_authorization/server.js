const express = require("express");
require("dotenv").config();
const database = require("./database/db");
const routers = require("./routes/auth-routes");
const app = express();
const port = process.env.PORT || 3000;
database();
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("hello home");
// });

app.use("/", routers);

app.listen(port, () => {
  console.log(`server is running on ${port} port`);
});
