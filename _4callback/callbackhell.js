const fs = require("fs");

fs.readFile("text.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const outputFile = data.toUpperCase();
  fs.writeFile("output.txt", outputFile, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    fs.readFile("output.txt", "utf8", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(data);
    });
  });
});
