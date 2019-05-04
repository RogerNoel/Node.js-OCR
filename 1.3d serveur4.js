var http = require('http');
var url = require('url');   // pour récupérer la page demandée par le visiteur

var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;     // on "parse" la requête du visiteur pour obtenir le nom de la page demandée
    console.log(page);
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write('Bien le bonjour');
    res.end();
});
server.listen(8080);