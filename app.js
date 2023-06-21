const http = require('http');
const currDateTime = require('./myFirstModeule');

http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('Hello World!' + currDateTime.myDateTime());
}).listen(8090);

