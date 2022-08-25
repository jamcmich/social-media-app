import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors';

import resolvers from '../../apollo/graphql/resolvers/user';
import { typeDefs } from '../../apollo/graphql/schemas/user';
import { createContext } from '../../apollo/graphql/contexts/context';

const cors = Cors();
const apolloServer = new ApolloServer({
	typeDefs,
	resolvers,
	context: createContext,
});

const startServer = apolloServer.start();

export default cors(async function serverHandler(req: any, res: any) {
	if (req.method === 'OPTIONS') {
		res.end();
		return false;
	}

	await startServer;

	await apolloServer.createHandler({
		path: '/api/graphql',
	})(req, res);
});

export const config = {
	api: {
		bodyParser: false,
	},
};
