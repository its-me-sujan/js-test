const http = require('http');
const currDateTime = require('./myFirstModeule');
const uc = require('upper-case');

http.createServer((req,res) => {
    // res.writeHead(200,{'Content-Type':'text/html'});
    const message = uc.upperCase('hello world');
    res.end(message + currDateTime.myDateTime());
}).listen(8090);

