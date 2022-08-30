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
		role: Role
	}

	type Address {
		id: String
		street: String
		city: String
		zipCode: String
		user: User
		userId: String
	}

	enum Role {
		ADMIN
		USER
	}

	type Query {
		users: [User]!
		addresses: [Address]!
	}
`;

export { typeDefs };
