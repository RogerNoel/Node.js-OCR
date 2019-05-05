/* *** une fois le module markdown installé, il faut aller voir la doc
On y apprend qu'il faut faire appel à l'objet 'markdown' à l'intérieur du module
et qu'on peut appeler la fonction 'toHTML' pour traduire du markdown en html
*** */
var markdown = require('markdown').markdown;
console.log(markdown.toHTML('Un paragraphe en **markdown** !'));

/* ***
require('markdown').markdown -->  La doc du module nous dit que les fonctions sont dans l'objet "markdown", 
donc on va chercher directement cet objet au sein du module.
*** */