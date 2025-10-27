const fs = require("fs");
const path = require("path");

//synchronous way to creating file
const dataFolder = path.join(__dirname, "data");
if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("folder is created!");
}

const filePath = path.join(dataFolder, "example.txt");
fs.writeFileSync(filePath, "hello , world");
console.log("file is created!");

const readFile = fs.readFileSync(filePath, "utf8");
console.log(readFile);
fs.appendFileSync(filePath, "\nhow are u?");
const readFile2 = fs.readFileSync(filePath, "utf8");
console.log(readFile2);

//asynchronous way to creating file
const asyncFilePath = path.join(dataFolder, "async.txt");
fs.writeFile(asyncFilePath, "asyc created", (err, data) => {
  if (err) throw err;
  console.log("Async file is created!");

  fs.readFile(asyncFilePath, "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);

    fs.appendFile(asyncFilePath, "\nupdated file", (err, data) => {
      if (err) throw err;
      console.log("file created");
      fs.readFile(asyncFilePath, "utf8", (err, updatedData) => {
        if (err) throw err;
        console.log(updatedData);
      });
    });
  });
});
