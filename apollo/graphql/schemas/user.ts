import { gql } from '@apollo/client';

const typeDefs = gql`
	type User {
		id: Int
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
		user: User
		userId: Int
	}

	type Query {
		users: [User]!
		addresses: [Address]!
	}
`;

export { typeDefs };
