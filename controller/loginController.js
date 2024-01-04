const createHttpError = require("http-errors");
const User = require("../schemas/userSchema");
const jwt = require("jsonwebtoken");

const getHomeController = (req, res, next) => {
  res.render("home", {
    title: res.locals.title,
  });
};
const getLoginController = (req, res, next) => {
  res.render("login", {
    title: res.locals.title,
  });
};

const loginController = async (req, res, next) => {
  const { email, mobile, password } = req.body;
  if (email || mobile) {
    const user = await User.findOne({
      $or: [{ email: email }, { mobile: mobile }],
    });
    const userInfo = { email, mobile, role: "user" };
    if (user) {
      if (user.password === password) {
        const token = jwt.sign(userInfo, process.env.COOKIE_SECRET, {
          expiresIn: "1d",
        });
        res.cookie(process.env.COOKIE_NAME, token, {
          maxAge: parseInt(process.env.JWT_EXPIRY),
          httpOnly: true,
          signed: true,
        });
        res.locals.loggedInUser = userInfo;
        res.redirect("/users");
      } else {
        next(createHttpError("Incorrect password!"));
      }
    } else {
      next(createHttpError("User not found!"));
    }
  } else {
    next(createHttpError("Something went wrong!"));
  }
};

const logoutController = (req, res, next) => {
  res.clearCookie(process.env.COOKIE_NAME);
  res.render("home");
};

module.exports = {
  getLoginController,
  loginController,
  logoutController,
  getHomeController,
};
