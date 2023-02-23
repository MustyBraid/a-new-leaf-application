const { Schema, model } = require("mongoose");
const Species = require("./Species");

const plantSchema = new Schema({
  nickname: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
    default: "nickname",
  },
  birthDate: {
    type: Date,
    default: Date.now()
  },
  icon: {
    type: String,
    default: "Plant1.png",
  },
  // //if you bring this back remember to update typeDefs.js
  //species: {
  //   type: Species
  // },
});

const Plant = model("Plant", plantSchema);

module.exports = Plant;
