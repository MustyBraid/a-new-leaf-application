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

    // me: async (parent, args, context) => {
    //   if (context.user) {
    //     return User.findOne({ _id: context.user._id });
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },

    // plants: async () => {
    //   return Plant.findAll();
    // },

    // plant: async (parent, { plantId }) => {
    //     return Plant.findOne({_id: plantId});
    // }
  },

  //   Mutation: {
  //     addUser: async (parent, { name, email, password }) => {
  //       const user = await User.create({ name, email, password });
  //       const token = signToken(user);

  //       return { token, profile };
  //     },
  //     addPlant: async (parent, { userId, plant }, context) => {
  //       if (context.user) {
  //         return User.findOneAndUpdate(
  //           { _id: userId },
  //           {
  //             $addToSet: { plants: plant },
  //           },
  //           {
  //             new: true,
  //             runValidators: true,
  //           }
  //         );
  //       }
  //       throw new AuthenticationError("You need to be logged in!");
  //     },
  //     removeUser: async (parent, args, context) => {
  //       if (context.user) {
  //         return User.findOneAndDelete({ _id: context.user._id });
  //       }
  //       throw new AuthenticationError("You need to be logged in!");
  //     },
  //   },
};

module.exports = resolvers;
