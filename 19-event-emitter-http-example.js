const http = require('http');

const server = http.createServer();

server.on('request', (re1,res) => {
    res.end('Welcome');
});

server.listen(5002);