const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.RegisterUser = async (req, res) => {
  console.log(req.body);
  try {
    const { email, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      email,
      username,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error signing up" });
  }
};

//GET Registered Users
module.exports.getRegisteredUsers = async (req, res) => {
  try {
    const users = new userModel.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ error: "Unable to get users" });
  }
};

//LOGIN

module.exports.LoginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    // console.log(req.body);
    const user = await userModel.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1hr",
    });
    res.json({ message: "Login successful", token: token });
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }
};
