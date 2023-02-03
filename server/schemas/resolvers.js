const { AuthenticationError } = require("apollo-server-express");
const { User, Plant, Species } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {

  Query: {
    users: async () => {
      return User.find();
    },

    user: async (root, args) => {
      return User.findOne({ _id: args.userId });
    },

    myPlants: async (root, _, context) => {
      return User.findById(context.user.id).then((data) => data.plants);
    },


    me: async (root, _, context) => {
      return User.findById(context.user.id);
    },

    allSpecies: async function fetchSpecies(source, input) {
      return Species.find().limit(20);
    },

    myPlant: async (root, {whichPlant}, context) => {
      console.log(`whichPlant: ${whichPlant}`);
        //find the user
        //check if the index is out of bounds for their [plants]
        //if it's within bounds, return the plant at that index

      return User.findById(context.user.id)
      .then((me) => me.plants.length > whichPlant ? me.plants[whichPlant] : null)
    }
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
