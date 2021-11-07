import knex from 'knex';
import knexConfig from '../knexfile';

type Env = 'development' | 'production';

const environment: Env = (process.env.NODE_ENV as Env) || 'development';
const config = knexConfig[environment];

export default knex(config);
