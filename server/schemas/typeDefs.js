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
    plant(_id: ID!): Plant
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
<<<<<<< HEAD
=======
    addPlant(nickname: String!, birthDate: String!): Plant
>>>>>>> 23f6a683a2078ae169f1e719d671eacde43fca4b
    login(email: String!, password: String!): Auth
    updateUser(name: String, email: String, password: String): Auth
  }
`;

module.exports = typeDefs;
