const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("homes page");
  } else if (url === "/projects") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("projects page");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("not found page");
  }
});
server.listen(3000, () => {
  console.log(`server is running on port 3000`);
});
