import * as dotenv from 'dotenv';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { resolvers } from './graphql/students_db/resolvers';
import typeDefs from './graphql/students_db/schemas/students';

dotenv.config();

const PORT = process.env.SERVER_PORT || 4000;

async function startServer() {
	const app = express();
	const server = new ApolloServer({ typeDefs, resolvers });

	await server.start();
	server.applyMiddleware({ app });

	app.use('/graphql', express.static('public'));

	app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
}

startServer();
