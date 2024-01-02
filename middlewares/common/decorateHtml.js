const decorateHtml = (page_title) => {
  return (req, res, next) => {
    res.locals.html = true;
    res.locals.title = `${page_title} - Chat Application`;
    next();
  };
};

module.exports = decorateHtml;
