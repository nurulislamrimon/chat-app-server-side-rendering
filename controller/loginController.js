const logingController = (req, res, next) => {
  res.render("index", {
    title: "Login - Chat Application",
  });
};

module.exports = { logingController };
