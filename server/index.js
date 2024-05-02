require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/Login")

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Rexpanel")

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate User!" });
  }
});

app.post("/api/login", async (req, res) => {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (user) {
      return res.json({ status: "ok", user: true });
    } else {
      return res.json({ status: "error", user: false });
    }
  
    res.json({ status: "ok"});
  });

// Start the server
const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
