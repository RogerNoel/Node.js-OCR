var http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.end('Salut tout le monde ! Comment ça va ?');
});
server.listen(8080);