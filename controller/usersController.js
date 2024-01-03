const { unlink } = require("fs");
const User = require("../schemas/userSchema");
const createHttpError = require("http-errors");
const path = require("path");

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
const deleteUsersController = async (req, res, next) => {
  const { userId } = req.params;
  const user = await User.findOne({ _id: userId });
  if (user.photo) {
    unlink(
      path.join(__dirname, "../public", "uploads", "user", user.photo),
      async (err) => {
        if (err) {
          next(createHttpError(err));
        } else {
          return;
        }
      }
    );
  }
  const result = await User.deleteOne({ _id: userId });
  res.send(result);
};

module.exports = { usersController, addUsersController, deleteUsersController };
