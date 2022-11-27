const { Schema, model } = require("mongoose");

const speciesSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  common_names: {
    type: String,
  },
  family: {
    type: String,
  },
  family_common_name: {
    type: String,
  },
  gbif: {
    type: String,
  },
  plantnet: {
    type: String,
  },
  powo: {
    type: String,
  },
  scientific_name: {
    type: String,
  },
  synonyms: {
    type: String,
  },
  usda: {
    type: String,
  },
});

const Species = model("Species", speciesSchema);

module.exports = Species;
