/**
 * --- Frameworks ---
 * 
 * Apollo Server:
 *      API for interfacing with data
 *      https://www.apollographql.com/docs/
 * 
 * GraphQL:
 *      Query language used with the Apollo API
 *      https://graphql.org/
 */
const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./graphql/typeDefs');
const { resolvers } = require('./graphql/resolvers/index')

// MongoDB Atlas
const mongoose = require('mongoose');
const { MONGODB_URI } = require('./config');

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

mongoose
	.connect(MONGODB_URI, { useNewUrlParser: true })
	.then(() => {
		console.log('MongoDB connected');
		return server.listen({ port: 5000 });
	})
	.then((result) => {
		console.log(`Server is running at ${result.url}`);
	});
