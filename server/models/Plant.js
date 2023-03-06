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
    type: Number,
    default: Date.now()
  },
  icon: {
    type: String,
    default: "Plant1.png",
  },
  speciesID: {
    type: String
  },
  speciesName: {
    type: String
  }
});

const Plant = model("Plant", plantSchema);

module.exports = Plant;
