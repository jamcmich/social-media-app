const { gql } = require('apollo-server');

const typeDefs = gql`
	# Query
	type Query {
		getPosts: [Post]
	}

	# Basic Types
	type Post {
		id: ID!
		body: String!
		username: String!
		createdAt: String!
	}

	type User {
		id: ID!
		email: String!
		token: String!
		username: String!
		createdAt: String!
	}

	# Inputs
	input RegisterInput {
		username: String!
		password: String!
		confirmPassword: String!
		email: String!
	}

	# Mutations
	type Mutation {
		register(registerInput: RegisterInput): User!
	}
`;

module.exports = {
	typeDefs,
};
