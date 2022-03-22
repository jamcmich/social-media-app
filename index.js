import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema/typeDefs.js';
import { resolvers } from './schema/resolvers.js';
import mongoose from 'mongoose';
import { mongodb_uri } from './config.js';

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

mongoose
	.connect(mongodb_uri, { useNewUrlParser: true })
	.then(() => {
        console.log('MongoDB connected')
		return server.listen({ port: 5000 });
	})
	.then((result) => {
		console.log(`Server is running at ${result.url}`);
	});
