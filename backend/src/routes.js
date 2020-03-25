const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');


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

routes.post('/ongs', async (request, response) => {

    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
       id,
       name,
       email,
       whatsapp,
       city,
       uf
    });

    console.log(name, email, whatsapp, city, uf, id);

    return response.json({id});
});

module.exports = routes 