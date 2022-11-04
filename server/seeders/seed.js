const db = require("../config/connection");
const { User, Plant } = require("../models");
const userSeeds = require("./userSeeds.json");
// const plantSeeds = require("./plantSeeds.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

// db.once("open", async () => {
//   try {
//     await Plant.deleteMany({});
//     await Plant.create(plantSeeds);

//     console.log("all done!");
//     process.exit(0);
//   } catch (err) {
//     throw err;
//   }
// });
