import 'ts-node';
import * as dotenv from 'dotenv';

dotenv.config();

export default {
	development: {
		client: 'pg',
		connection: {
			host: process.env.DB_HOST,
			database: process.env.DB_DATABASE,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			ssl: { rejectUnauthorized: false },
		},
		migrations: {
			directory: './db/migrations',
		},
		seeds: {
			directory: './db/seeds',
		},
	},

	production: {},
};
