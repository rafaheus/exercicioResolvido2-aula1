const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: '1234',
        database: 'exercicio_query_builder'
    }
});

module.exports = knex;