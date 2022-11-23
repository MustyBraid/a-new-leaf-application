const { Schema, model } = require("mongoose");

const speciesSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  common_names: {
    type: String,
  },
  family: {},
  family_common_name: {},
  gbif: {},
  plantnet: {},
  powo: {},
  scientific_name: {},
  synonyms: {},
  usda: {},
});

const Species = model("Species", speciesSchema);

module.exports = Species;
