const mongoose = require("mongoose");
require("dotenv").config();

const db = process.env.ATLAS_URI || "mongodb://localhost/plantdb";

console.log(db);

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
