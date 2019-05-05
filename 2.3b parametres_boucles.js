const express = require('express')
const app = express();

app.get('/compter/:nombre', (req, res) => {
    var noms = ['Nath', 'Roger', 'Dom'];
    res.render('2.3b page.ejs', {compteur: req.params.nombre, noms: noms});
});

app.listen(8080);