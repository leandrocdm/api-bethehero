const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionControler = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

routes.post( '/sessions', SessionControler.create)

module.exports = routes;


// //metodo pra criar rota - GET
// routes.get('/teste/:id', (request, response) => {

//     //criando uma constante para pegar o parametro do endpoint
//     const params = request.params;

//     console.log(params);

//     //resposta
//     return response.json({
//         'resposta' : 'ok'
//     })
// });

// //metodo pra criar rota - POST
// routes.post('/teste', (request, response) => {

//     //Constante para pegar o body
//     const body = request.body;

//     console.log(body);

//     return response.json({
//         'resposta' : 'ok'
//     })
// });


