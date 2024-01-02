const createHttpError = require("http-errors");

const notFoundHandler = (req, res, next) => {
  next(createHttpError(404, "Your requested content was not found!"));
};

const errorHandler = (error, req, res, next) => {
  res.locals.error =
    process.env.NODE_ENV === "development" ? error : error.message;
  const errorTitle = "Error!";
  const errorMessage = error.message || "404! Not found";

  res.status(error.status || 500);

  if (res.locals.html) {
    res.render("error", {
      title: errorTitle,
      headText: errorMessage,
    });
  } else {
    res.send(res.locals.error);
  }
};

module.exports = {
  errorHandler,
  notFoundHandler,
};
