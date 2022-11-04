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
    },

    // plants: async () => {
    //   return Plant.findAll();
    // },

    // plant: async (parent, { plantId }) => {
    //     return Plant.findOne({_id: plantId});
    // }
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
    // addPlant: async (parent, { userId, plant }) => {
    //   return User.findOneAndUpdate(
    //     { _id: userId },
    //     {
    //       $addToSet: { plants: plant },
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     }
    //   );
    // },
    // },
  },
};

module.exports = resolvers;
