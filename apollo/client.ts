import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'cross-fetch';

const client = new ApolloClient({
	link: new HttpLink({
		uri: 'https://graphqlzero.almansi.me/api',
		fetch,
	}),
	cache: new InMemoryCache(),
});

export { client };
