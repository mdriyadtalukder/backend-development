const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req); //req contains details about what the client is asking for like all request, such as:req.method,req.header,req.url etc
  // res used to send back a response to the client.

  res.writeHead(200, { "Content-Type": "text/plain" }); //This method sets the HTTP response status code and headers.na likhleo automatically default vabe edi dibe
  res.end("hello,server"); //res.end method ends the response and sends it to the client.
});
const port = 3000;
server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
