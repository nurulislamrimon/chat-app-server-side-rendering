const User = require("../schemas/userSchema");

const usersController = (req, res, next) => {
  res.render("users", {
    title: res.locals.title,
  });
};
const addUsersController = async (req, res, next) => {
  console.log(req.body);
  // const result = await User.create(req.body);
};

module.exports = { usersController, addUsersController };
