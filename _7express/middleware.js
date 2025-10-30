const express = require("express");
const app = express();

const myMiddleware = (req, res, next) => {
  const time = new Date().toISOString();
  console.log(`${time} from ${req.method} to ${req.url}`);
  next();
};
app.use(myMiddleware);

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/about", (req, res) => {
  res.send("about");
});
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
