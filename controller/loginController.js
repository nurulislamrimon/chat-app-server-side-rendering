const createHttpError = require("http-errors");
const User = require("../schemas/userSchema");

const getLoginController = (req, res, next) => {
  res.render("index", {
    title: res.locals.title,
  });
};

const loginController = async (req, res, next) => {
  const { email, mobile, password } = req.body;
  if (email || mobile) {
    const user = await User.findOne({
      $or: [{ email: email }, { mobile: mobile }],
    });
    if (user) {
      if (user.password === password) {
        // res.render("users", { title: "Users" });
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

module.exports = { getLoginController, loginController };
