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
    speciesID: String
    speciesName: String
  }

  type Species {
    _id: ID! 
    common_names: String
    family: String
    family_common_name: String
    gbif: String
    plantnet: String
    powo: String
    scientific_name: String
    synonyms: String
    usda: String
  }

  type Query {
    users: [User]!
    plants: [Plant]!
    user(userId: ID!): User
    myPlants: [Plant]!
    me: User
    allSpecies: [Species]! ${/*Another placeholder, but functional*/ ""}
    species(speciesID: ID!): Species
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
