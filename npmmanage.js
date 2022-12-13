var http = require('http');
var uc = require('uppercase');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(uc('Welcome Shyam!!'));
  res.end();
}).listen(8085);