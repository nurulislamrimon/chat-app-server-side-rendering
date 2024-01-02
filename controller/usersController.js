const usersController = (req, res, next) => {
  res.render("users", {
    title: "Users - Chat Application",
  });
};

module.exports = { usersController };
