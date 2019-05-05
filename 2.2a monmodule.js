var direBonjour = function(){
    console.log('Bonjour');
};

var direAuRevoir = function(){
    console.log('Au revoir');
};

exports.direBonjour = direBonjour;
exports.direAuRevoir = direAuRevoir;

// AUTRE SYNTAXE, plus compacte
// exports.direBonjour = function() {...};