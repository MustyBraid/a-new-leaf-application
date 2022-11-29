const { AuthenticationError } = require("apollo-server-express");
const { User, Plant } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (root, { userId }) => {
      return User.findOne({ _id: userId });
    }, //,

    species: (exports = async function fetchSpecies(source, input) {
      const mongodb = context.services.get("mongodb-atlas");
      const species = mongodb.db("a-new-leaf").collection("species");
      // Replace them with your ^^^^ Database Name and your ^^^^ Collection Name
      return await species.find({ plant_id: source._id }).toArray();
      // Please note that the above source ^^ is responsible for getting
      // the details from the parent GraphQL Type (User).
    }),
  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
    addPlant: async (parent, { name, birthDate }, context) => {
      console.log(context);
      if (context.user) {
        const plant = new Plant({ name, birthDate });

        await User.findByIdAndUpdate(context.user.id, {
          $push: { plants: plant },
        });

        return plant;
      }
      throw new AuthenticationError("You must be logged in!");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(context.user.id, args, {
          new: true,
        });
      }
      throw new AuthenticationError("You must be logged in!");
    },
  },
};

module.exports = resolvers;
