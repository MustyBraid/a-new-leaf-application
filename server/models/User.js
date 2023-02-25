const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const Plant = require("./Plant");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    //Grady added an m to the end of this regex to try to fix it
    //untested as of 02/24 6:26pm
    match: [/^\S+@\S+\.\S+$/m, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  plants: [Plant.schema],
  schemaVersion: {
    type: String,
    required: true,
    default: "1.0.0",
  }
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
