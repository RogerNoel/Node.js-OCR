/* *** insertion du module express*** */
var express = require('express');

/* *** création d'un objet "app" appelant la fonction "express" *** */
var app = express();


-/* --------------------------------------------------- création des routes --------------------------- */
app.get('/', function(req, res){
    res.setHeader('content-type', 'text/plain');
    res.send("Vous êtes à l'accueil");
})

app.get('/nath', function(req, res){
    res.setHeader('content-type', 'text/plain');
    res.send("Vous êtes à Xhoris");
})

app.get('/roger', function(req, res){
    res.setHeader('content-type', 'text/plain');
    res.send("Bienvenue chez Roger");
});

/* *** syntaxe :etagenum pour envoyer le paramètres dans le tableau 'params' *** */
app.get('/etage/:etagenum/chambre', function(req, res){
    res.setHeader('content-type', 'text/plain');
    if (isNaN(req.params.etagenum)) {
        res.status(404).send('Le paramètre n\'est pas un nombre');
    } else {
        res.end("Vous êtes à l'étage n°" + req.params.etagenum);
    }
    
});

/* ----------------------------------------------------- fin des routes ----------------------------------- */

/* *** gestion des erreurs 404*** TOUJOURS ECRIT JUSTE AVANT L'ECOUTEUR */
app.use(function(req, res, next){
    res.setHeader('content-type', 'text/plain');
    res.status(404).send('Page introuvable');
})

app.listen(8080);