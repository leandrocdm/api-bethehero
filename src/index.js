//importando o framework express
const express = require('express');
const cors = require( 'cors');
const routes = require('./routes');

//usando o framework
const app = express();

//informando o express a interpretar json
app.use(express.json());
app.use(routes);

app.use(routes);


//Usar a porta 3333
app.listen(3333);