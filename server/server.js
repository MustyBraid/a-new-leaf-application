const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");
const cors = require("cors");
require("dotenv").config();

const { typeDefs, resolvers } = require("./schemas");

const spoofContext = {
  user: {
    id: "63859814e42bc136f21beaa8",
    name: "Cali Huddleston",
    email: "calihuddleston@gmail.com",
    password: "$2b$10$P/zzZRFZ7M26dyIWeQquEuO/mTKcDdLK0jPIi3.NPQ.xGmp2mfvuu",
  },
};
//Use spoofcontext to fake being logged in as Cali when doing testing in ApolloGraphql

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: authMiddleware,
  context: spoofContext,
});

app.use(cors());
app.use(express.json());

const dbo = require("./config/connection");

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "public")));
}

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  dbo.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
