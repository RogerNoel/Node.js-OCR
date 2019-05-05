var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200);
    res.end('Salut les gens !');
});

/* ----- on() permet l'écoute de l'événement 'close' sur le serveur ------- */
server.on('close', function(){
    console.log('Good Bye');
});

server.listen(8080);

server.close(); //  l'événement 'close' survient et déclenche la fonction de callback