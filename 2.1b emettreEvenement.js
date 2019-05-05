// insérer le module 'EventEmitter'
var EmettEven = require('events').EventEmitter; // EventEmitter est une classe de Events

// création d'un objet basé sur EventEmitter
var jeu = new EmettEven();

// créer l'événement
jeu.on('gameover', function(message){
    console.log(message);
});

// Emission de l'évenement -- emit() est une méthode de EventEmitter
jeu.emit('gameover', 'Vous avez perdu');