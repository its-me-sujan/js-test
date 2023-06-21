const http = require('http');

http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('Hello Wqewrewasdfrorld!');
}).listen(8080);
console.log('app running on port 8080');
