const User = require("../schemas/userSchema");

const inboxController = async (req, res, next) => {
  const users = await User.find({});
  res.render("inbox", {
    title: res.locals.title,
    users,
  });
};

module.exports = { inboxController };
