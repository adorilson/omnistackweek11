const express = require('express');

const OngController = require('./controllers/OngController');

const IncidentController = require('./controllers/IncidentController');

const ProfileController = require('./controllers/ProfileController');


const routes = express.Router();

/**
 * Rota / Recurso 
 */

 /**
  * Métodos HTTP:
  * 
  * GET: buscar uma informação do back-end
  * POST: criar uma informação no back-end
  * PUT: alterar uma informação no back-end
  * DELETE: deletar uma informação no back-end
  */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: parametros nomeados enviados na rota após ? (filtros, paginação)
 *      acessados com request.query
 * Route Params: parâmetros utilizados para identificar recursos
 *      acessados com request.params
 * Request Body: corpo da requisicao, utilizado para criar ou alterar recursos
 *      acessados com request.body
 *  
 */

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes
