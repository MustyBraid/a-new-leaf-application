const { Schema, model } = require("mongoose");

const plantSchema = new Schema({
  plantName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  nickname: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  age: {
    type: Number,
  },
  facts: {
    type: String,
    minlength: 1,
    maxlength: 500,
  },
});

const Plant = model("Plant", plantSchema);

module.exports = Plant;
