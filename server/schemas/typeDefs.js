const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    name: String
    email: String
    password: String
    schemaVersion: String
    plants: [Plant]
  }

  type Plant {
    _id: String
    birthDate: Int
    nickname: String
    icon: String
  }

  type Species {
    _id: ID! 
    ${/*This is a placeholder */ ""}
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    myPlants: [Plant]!
    me: User
    allSpecies: [Species]! ${/*Another placeholder*/ ""}
    myPlant(whichPlant: Int!): Plant
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    addPlant(nickname: String, birthDate: String, species: String!): Plant
    login(email: String!, password: String!): Auth
    updateUser(name: String, email: String, password: String): Auth
  }
`;

module.exports = typeDefs;
