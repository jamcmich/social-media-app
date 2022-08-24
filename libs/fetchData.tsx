import { client } from '../apollo/client';
import { typeDefs } from '../apollo/graphql/schemas/user';

const fetchData = async () => {
	const response = await client.query({
		query: typeDefs,
	});

	return response;
};

export default fetchData;
