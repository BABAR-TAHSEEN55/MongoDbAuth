const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://babartahseeen2005:jqhHV4XoUbxfhiiQ@cluster0.j5goa.mongodb.net/Auth"
  )
  .then(() => console.log("MongoDB connected Successfully!"));

const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  price: Number,
});
const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: Number,
});
const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = { Admin, User, Course };
