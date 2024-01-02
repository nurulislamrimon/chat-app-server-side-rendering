const inboxController = (req, res, next) => {
  res.render("inbox", {
    title: "Inbox - Chat Application",
  });
};

module.exports = { inboxController };
