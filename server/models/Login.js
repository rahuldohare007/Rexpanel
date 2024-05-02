const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    f_userName: { type: String, required: true, unique: true },
    f_Pwd: { type: String, required: true },
  },
  { collection: "user-data" }
);

const model = mongoose.model("UserData", User);

module.exports = model;
