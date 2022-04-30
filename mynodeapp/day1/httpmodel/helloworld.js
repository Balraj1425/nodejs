let http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end("hello world")
}).listen(3001)

