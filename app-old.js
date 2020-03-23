const http = require('http');

http.createServer( ( req, res )  => {
   
    res.writeHead(200, {'content-Type': `aplication/json`});

            let salida = {
                nombre: 'Arturo Molina',
                edad: '31',
                url: req.url
            }
            res.write( JSON.stringify(salida));
    //res.write('Hola mundo');
    res.end();

}) 
.listen(8080);

console.log( `probando el puerto 8080`);