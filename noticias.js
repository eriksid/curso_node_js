var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'html'});
  var category = req.url;
  var msg = 'Noticias';
  if (category === '/tecnologia') {
    res.end('<h1>' + msg + ' de Tecnologia</h1>');
  }else if (category === '/investimentos') {
    res.end('<h1>' + msg + ' de Investimentos</h1>');
  } else {
    res.end('<h1>Home</h1>');
  }
}).listen(3000);