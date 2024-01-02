const loginController = (req, res, next) => {
  res.render("index", {
    title: res.locals.title,
  });
};

module.exports = { loginController };
