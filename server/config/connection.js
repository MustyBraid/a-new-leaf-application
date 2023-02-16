const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

const db = process.env.ATLAS_URI;

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
