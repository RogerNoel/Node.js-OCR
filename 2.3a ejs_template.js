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


// Après installation du module de templating NPM EJS, on réécrit cette partie de route
// Ce module va déléguer la gestion de la vue à son moteur de template
app.get('/etage/:etagenum/chambre', (req,res) => {
    if (isNaN(req.params.etagenum)){
        res.status(404).send('L\'étage n\'est pas un nombre')
    } else {
            // on fait appel à un fichier 2.3a chambre.ejs QUI DOIT se trouver dans un SOUS-DOSSIER 'views'
    // ATTENTION à l'extension .ejs ET NON .js
    res.render('2.3a chambre.ejs', {etage: req.params.etagenum});
    }
})


/* ----------------------------------------------------- fin des routes ----------------------------------- */

/* *** gestion des erreurs 404*** TOUJOURS ECRIT JUSTE AVANT L'ECOUTEUR */
app.use(function(req, res, next){
    res.setHeader('content-type', 'text/plain');
    res.status(404).send('Page introuvable');
})

app.listen(8080);