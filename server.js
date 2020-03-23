const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/public'));
 
app.get('/', (req, res) => {
  //res.send('Hello World')
  //res.writeHead(200, {'content-Type': `aplication/json`});

  let salida = {
      nombre: 'Arturo Molina',
      edad: '31',
      url: req.url
  }
  res.send(salida);
//res.write('Hola mundo');
res.end();

});


app.listen(PORT, () => {
    console.log(`Escuchando peticion en el puerto ${PORT}.`)
});