const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World! this is my first server');
}

const server = http.createServer(requestListener);
server.listen(2000);

