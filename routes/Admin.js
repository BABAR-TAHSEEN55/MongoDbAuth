const express = require("express");
const { Router } = require("express");
const router = Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Admin } = require("../db/schema.js");
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  if (!(username && password)) {
    return res
      .status(404)
      .json({ Message: "Username and Password is required" });
  } // Use returns
  try {
    const HashedPassword = await bcrypt.hash(password, 10);
    await Admin.create({
      username,
      password: HashedPassword,
    });

    res.status(200).json({
      Message: "Admin created Successfully",
      Admin: username,
    });
  } catch (err) {
    if (err) res.json({ message: "Something went wrong", err });
    // console.log(err);
  }
});
router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  if (!(username && password))
    return res
      .status(404)
      .json({ message: "Username or Password is required" });
  const existingAdmin = await Admin.findOne({
    username,
  });
  console.log(existingAdmin);
  if (!existingAdmin)
    return res.status(404).json({ message: "Admin not found!" });
  const Matched = bcrypt.compare(password, existingAdmin.password);
  if (!Matched) return res.status(404).json({ msg: "Incorrect Password" });
  const token = jwt.sign(
    { _id: existingAdmin._id, username },
    process.env.SECRET_KEY,
    {
      expiresIn: "1d",
    }
  );
  res.status(200).json({ msg: "LOGIN successfull" });
  res.status(200).json({ msg: "Token Created ", token });
});
module.exports = router;
//No double braces as it is not a function
// use require('dotenv').config()
