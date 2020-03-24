const express = require('express');

const app = express();

// necessário para a aplicação entender json no corpo das requisicoes
app.use(express.json());

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

app.post('/users', (request, response) => {

    const params = request.body;

    console.log(params);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Adorilson Bezerra'
    });
});

app.listen(3333);