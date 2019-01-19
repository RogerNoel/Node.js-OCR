var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {"Content-Type": "text/plain"});

    if (page == '/'){
        res.write('Page d\'accueil');
    }
    else if (page == '/roger') {
        res.write('Ici la page de Roger');
    }
    else if (page = '/dossier/page'){
        res.write('Cette page se trouve dans dossier');
    }

    res.end();
});
server.listen(8080);