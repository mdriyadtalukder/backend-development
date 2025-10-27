function aFun(a, callbackFn) {
  console.log("riyad");
  callbackFn();
}
function callbackFn() {
  console.log("hi");
}
aFun(2, callbackFn);

const fs = require("fs");

fs.readFile("text.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
