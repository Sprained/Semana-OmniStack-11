const knex = require('knex');
const conf = require('../../knexfile');

const config = process.env.NODE_ENV === 'test' ? conf.test : conf.development;

const con = knex(config);

module.exports = con