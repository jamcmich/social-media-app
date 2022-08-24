import { gql } from '@apollo/client';

const typeDefs = gql`
	query {
		users {
			data {
				id
				name
				username
				email
			}
		}
	}
`;

export { typeDefs };
