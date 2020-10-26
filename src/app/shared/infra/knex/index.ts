const knex = require('knex');
const config = require('./knexfile');

export const connection = knex(JSON.stringify(config.development));
