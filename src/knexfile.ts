import 'ts-node';
import * as dotenv from 'dotenv';

dotenv.config();

export default {
	development: {
		client: 'pg',
		connection: process.env.DATABASE_URL,
		migrations: {
			directory: __dirname + '/src/db/migrations',
		},
		seeds: {
			directory: __dirname + '/src/db/seeds',
		},
	},

	production: {},
};
