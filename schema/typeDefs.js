import { gql } from "apollo-server";

const typeDefs = gql`
    type Query {
        getPosts: [Post]
    }

    type Post {
        id: ID!
        body: String!
        username: String!
        createdAt: String!
    }
`;

export { typeDefs };