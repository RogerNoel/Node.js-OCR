/* --------------- appel aux bibliothèques --------------------- */
var http = require('http');
var url = require('url');
var querystring = require('querystring'); // --> découpe les paramètres de la chaîne passée dans l'url

/* ------------------- appel à la fonction createServer() ----------------- */
var server = http.createServer(function(req, res) {

/* ---------------- récupération des paramètres passés en url ------------------ */
    var params = querystring.parse(url.parse(req.url).query);
    // params est un tableau, on peut le logger -->
    console.log(params);
    console.log(params.prenom);
    console.log(params['nom']);

    res.writeHead(200, {"Content-Type":"text/plain"}); // indication du type MIME

    /* -------------- vérification de l'existence des paramètres ------- */
    if ('prenom' in params && 'nom' in params){
        res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom'] );
    }
    else {
        res.write('Vous n\'avez pas de nom?');
    }


    res.end();
});
server.listen(8080);