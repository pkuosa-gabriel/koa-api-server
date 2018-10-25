const environment = process.env.NODE_ENV || 'development';
import knex from 'knex';
import * as config from '../../../knexfile';

export default knex(config[environment]);
