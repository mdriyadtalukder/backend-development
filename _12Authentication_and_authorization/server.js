// require("dotenv").config();
const express = require("express");
const routers = require("./routes/auth-routes");
const home = require("./routes/home.router");
const admin = require("./routes/admin-route");

const app = express();
const port = process.env.PORT || 3000;
const databases = require("./database/db");
databases();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello home");
});

app.use("/api/", routers);
app.use("/api/", home);
app.use("/api/", admin);

app.listen(port, () => {
  console.log(`server is running on ${port} port`);
});
