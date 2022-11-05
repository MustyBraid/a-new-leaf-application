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

    // plantSpecies: async (parent, { name }) => {
    //   const params = {};

    //   if (name) {
    //     params.name = {
    //       $ref: "",
    //       $db: "",
    //       $name: "",
    //     };
    //   }
    // },

    // plantInfo: async (parent, { id }) => {
    //   plantSpecies.findById(id).populate("plant");
    // },

    // plant: async (parent, { _id }, context) => {
    //   if (context.user) {
    //     const user = await User.findById(context.user._id).populate({
    //       path: "plants.plantSpecies",
    //       populate: "plant",
    //     });

    //     return user.plants.id(_id);
    //   }
    //   throw new AuthenticationError("You must be logged in!");
    // },
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
    addPlant: async (parent, { nickname, birthDate }, context) => {
      console.log(context);
      if (context.user) {
        const plant = new Plant.create({ nickname, birthDate });

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
