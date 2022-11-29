const { Schema, model } = require("mongoose");

const plantSchema = new Schema({
  nickname: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  birthDate: {
    type: Date,
  },
  species: [
    {
      type: Schema.Types.ObjectId,
      ref: "species",
    },
  ]
});

const Plant = model("Plant", plantSchema);

module.exports = Plant;
