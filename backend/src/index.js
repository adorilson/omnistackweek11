const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// necessário para a aplicação entender json no corpo das requisicoes
app.use(cors());
app.use(express.json());
app.use(routes)



 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc...
  */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */



app.listen(3333);