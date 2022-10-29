const { Schema, model } = require("mongoose");

const plantSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  nickname: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  age: {
    type: Number,
  },
});
