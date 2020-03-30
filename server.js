const express = require('express');
const app = express();
const PORT = 3000;
const hbs = require('hbs');
app.use(express.static(__dirname + '/public'));
 
// Express HBS engine
hbs.registerPartials(__dirname + '/views/parcial' );
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home',{
    nombre: 'Arturo',
    fecha: new Date().getFullYear()
  });
});

app.get('/about', (req, res) => {
  res.render('about',{
    fecha: new Date().getFullYear()
  });
});

app.listen(PORT, () => {
    console.log(`Escuchando peticion en el puerto ${PORT}.`)
});