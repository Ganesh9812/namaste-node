const http = require("node:http");

//http.createServer() gives an instance of the server which can listen to the request
const server = http.createServer(function (req, res) {
  if (req.url === "/getSecretData") {
    res.end("secret data");
  }
  res.end("hello world");
});
server.listen(7777);
//we can use the 7777 port as per our wish
//
