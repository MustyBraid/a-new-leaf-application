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
    birthDate: Float
    nickname: String
    icon: String
    speciesID: Float
    speciesName: String
  }

  type Species {
    _id: ID! 
    ${/*This is a placeholder */ ""}
  }

  type Query {
    users: [User]!
    plants: [Plant]!
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
    addPlant(nickname: String, birthDate: String): Plant
    login(email: String!, password: String!): Auth
    updateUser(name: String, email: String, password: String): Auth
  }
`;

module.exports = typeDefs;
