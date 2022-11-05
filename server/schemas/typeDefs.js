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
<<<<<<< HEAD
=======
    plant(_id: ID!): Plant
>>>>>>> ac46b8156ea8fe8764a0a96e060b59ee5656accb
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser(name: String, email: String, password: String): Auth
  }
`;

module.exports = typeDefs;
