const jwt = require("jsonwebtoken");

const verifyAuthentication = (req, res, next) => {
  if (Object.keys(req.signedCookies).length) {
    if (req.signedCookies[process.env.COOKIE_NAME]) {
      const payload = jwt.verify(
        req.signedCookies[process.env.COOKIE_NAME],
        process.env.COOKIE_SECRET
      );
      res.locals.loggedInUser = payload;
      next();
    } else {
      res.redirect("/login");
    }
  } else {
    next();
    // res.redirect("/login");
  }
};
module.exports = verifyAuthentication;
