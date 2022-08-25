import { gql } from '@apollo/client';

const typeDefs = gql`
	type User {
		id: String
		email: String
		firstName: String
		lastName: String
		phone: String
		img: String
		username: String
		address: Address
	}

	type Address {
		street: String
		city: String
		zipCode: String
		county: String
		country: String
		user: User
		userId: String
	}

	type Query {
		users: [User]!
	}
`;

export { typeDefs };
