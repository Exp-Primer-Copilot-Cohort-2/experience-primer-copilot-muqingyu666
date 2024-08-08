// Create web server
// Create a web server that listens to requests on port 8080.
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello world");
});

server.listen(8080, () => {
  console.log("Server listening on port 8080");
});
