// insérer le module
var EventEmitter = require('events').EventEmitter;

// création d'un objet basé sur EventEmitter
var jeu = new EventEmitter();

// créer l'événement
jeu.on('gameover', function(message){
    console.log(message);
});

// Emission de l'évenement
jeu.emit('gameover', 'Vous avez perdu');