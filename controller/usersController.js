const User = require("../schemas/userSchema");

const usersController = (req, res, next) => {
  res.render("users", {
    title: res.locals.title,
  });
};
const addUsersController = async (req, res, next) => {
  const { filename } = req.files[0];

  const result = await User.create({ ...req.body, photo: filename });
  res.send(result);
};

module.exports = { usersController, addUsersController };
