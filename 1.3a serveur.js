// require = appel à une bibliothèque Nodejs; dans ce cas la biblio 'http' pour créer un serveur WEB
var http_server = require('http'); // la variable http_server est un OBJET et possède donc des METHODES
var server = http_server.createServer((req, res) => {
    res.writeHead(200); // on renvoie le code 200 ('ok tout va bien')
    res.end('Salut tout le monde ! ça va ?');   // envoie un message au navigateur
});

// enfin on lance le serveur sur le port 8080
server.listen(8080);