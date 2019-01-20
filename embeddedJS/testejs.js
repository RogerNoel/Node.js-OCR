/* *** insertion du module express*** */
var express = require('express');

/* *** création d'un objet "app" appelant la fonction "express" *** */
var app = express();


-/* --------------------------------------------------- création des routes --------------------------- */

/* *** syntaxe :etagenum pour envoyer le paramètres dans le tableau 'params' *** */
app.get('/etage/:etagenum/chambre', function(req, res){
    res.render('chambre.ejs', {etage: req.params.etagenum});
});

/* ----------------------------------------------------- fin des routes ----------------------------------- */

/* *** gestion des erreurs 404*** TOUJOURS ECRIT JUSTE AVANT L'ECOUTEUR */
app.use(function(req, res, next){
    res.setHeader('content-type', 'text/plain');
    res.status(404).send('Page introuvable');
})

app.listen(8080);