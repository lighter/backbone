var http = require('http'),
    fs = require('fs');

http.createServer(function(req, res) {
  fs.readFile(__dirname + '/index3.html', function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  });
}).listen(8000);

console.log("It is run.....");