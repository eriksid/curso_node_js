var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'html'});
  res.end('<h1>Hello Worl!</h1>');
}).listen(8080);