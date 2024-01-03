const User = require("../schemas/userSchema");

const usersController = async (req, res, next) => {
  const users = await User.find({});
  res.render("users", {
    title: res.locals.title,
    users,
  });
};
const addUsersController = async (req, res, next) => {
  const { filename } = req.files[0];

  const result = await User.create({ ...req.body, photo: filename });
  res.send(result);
};

module.exports = { usersController, addUsersController };
