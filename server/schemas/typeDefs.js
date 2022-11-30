const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    name: String
    email: String
    password: String
    plants: [Plant]
  }

  type Plant {
    _id: ID!
    owner: User
    birthDate: String
    nickname: String
    species: String
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    plant(_id: ID!): Plant
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    addPlant(nickname: String!, birthDate: String!, species: String!): Plant
    login(email: String!, password: String!): Auth
    updateUser(name: String, email: String, password: String): Auth
  }
`;

module.exports = typeDefs;
