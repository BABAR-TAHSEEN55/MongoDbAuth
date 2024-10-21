const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://userfarhan55:ympJgMb4BLulFjKN@cluster0.tqzrk.mongodb.net/Auth"
  )
  .then(() => console.log("MongoDB connected Successfully!"));

const AdminSchema = new mongoose.Schema({
  name: String,
  password: Number,
});
const UserSchema = new mongoose.Schema({});
