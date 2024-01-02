const inboxController = (req, res, next) => {
  res.render("inbox", {
    title: res.locals.title,
  });
};

module.exports = { inboxController };
