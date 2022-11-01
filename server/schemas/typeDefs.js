const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID
        name: String
        email: String
        plants: [Plant]
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        user: User
    }

    type Mutation {
        addUser(name: String!, email: String!, password: String!)
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;
