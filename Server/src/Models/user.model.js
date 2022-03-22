const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    phone_number: {
      type: Number,
      require: true,
      minlength: 10,
      maxlength: 10,
      unique: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = model("user", userSchema);
