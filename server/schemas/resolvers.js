const { AuthenticationError } = require("apollo-server-express");
const { User, Plant, Species } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {

  Query: {
    users: async () => {
      return User.find();
    },

<<<<<<< HEAD
    user: async (root, args) => {
      return User.findOne({ _id: args.userId });
    },

    myPlants: async (root, _, context) => {
      return User.findById(context.user._id).plants;
    },

    myPlant: async (root, {whichPlant}, context) => {
      //find the user, check if the index is out of bounds for their [plants]
      //if it's within bounds, return the plant at that index; else return null
      return User.findById(context.user._id)
      .then((me) => me.plants.length > whichPlant ? me.plants[whichPlant] : null)
    },

    me: async (root, _, context) => {
      console.log("me query ran! Here's context: ", context.user);
      return User.findById(context.user._id);
    },

    allSpecies: async function fetchSpecies(source, input) {
      return Species.find().limit(20);
    }

=======
    user: async (root, { userId }) => {
      return User.findOne({ _id: userId });
    }, //,

    plants: async () => {
      return Plant.find();
    },

    plant: async (root, { plantId }) => {
      return Plant.findOne({ _id: plantId });
    },
>>>>>>> master
  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }
      throw new AuthenticationError("You must be logged in!");
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect email or password!");
      }

      const token = signToken(user);
      return { token, user };
    },

    addPlant: async (parent, { name, birthDate }, context) => {
      if (context.user) {
        const plant = new Plant({ name, birthDate });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { plants: plant },
        });

        return plant;
      }
      throw new AuthenticationError("You must be logged in!");
    },
    // updatePlant: async (_, args, context) => {
    //   if (context.user) {
    //     const updatedUser = {plants: []}
    //     return User.findByIdAndUpdate(context.user.id, args, {
    //       new: true,
    //     });
    //   }
    //   throw new AuthenticationError("You must be logged in!");
    // },
  },
};

module.exports = resolvers;
