const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    plants: [Plant]
  }

  type Plant {
    _id: ID
    birthDate: String
    nickname: String
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    addPlant(nickname: String!, birthDate: String!): Plant
    login(email: String!, password: String!): Auth
    updateUser(name: String, email: String, password: String): Auth
  }
`;

module.exports = typeDefs;
