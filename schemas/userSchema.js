const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
  password: {
    type: String,
  },
  photo: {
    type: String,
  },
});

const User = new mongoose.model("User", userSchema);
module.exports = User;
