const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(8080);
/**
 * METODO HTTP:
 * 
 * GET: Buscar/listar uma informação no backend
 * POST:Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma infromação no backend
 */

 /**
  * tipos de parametros
  * 
  * Query Parms: Parametros nomeados enviados  na rota após "?"( Filtros, paginação)
  * Route Parms: Parametros para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  * 
  */


