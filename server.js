const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/public'));
 
// Express HBS engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

  res.render('home',{
    nombre: 'Arturo',
    fecha: new Date().getFullYear()
  });

});


app.listen(PORT, () => {
    console.log(`Escuchando peticion en el puerto ${PORT}.`)
});