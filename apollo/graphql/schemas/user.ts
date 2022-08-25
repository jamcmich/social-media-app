import { gql } from '@apollo/client';

const typeDefs = gql`
	type User {
		id: String
		name: String
		username: String
		email: String
	}

	type Query {
		users: [User]!
	}
`;

export { typeDefs };
