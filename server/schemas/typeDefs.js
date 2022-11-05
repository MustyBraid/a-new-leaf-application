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
    nickname: String
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    plant(_id: ID!): Plant
    // plantSpecies(name: String): []
    // plantInfo(_id: ID!): 
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    addPlant(plantSpecies: [ID]!): Plant
    login(email: String!, password: String!): Auth
    updateUser(name: String, email: String, password: String): Auth
  }
`;

module.exports = typeDefs;
