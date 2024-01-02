const { check } = require("express-validator");
const User = require("../schemas/userSchema");
const createHttpError = require("http-errors");

const addUserValidator = [
  check("name")
    .isLength({ min: 3 })
    .withMessage("Name is required!")
    .isAlpha("en-US", { ignore: "-" })
    .withMessage("Name must not contain other than alphabet")
    .trim(),
  check("email")
    .isEmail()
    .withMessage("Invalid email address")
    .trim()
    .custom(async (value) => {
      try {
        const user = await User.findOne({ email: value });
        if (user) {
          throw createHttpError("Email already in used!");
        }
      } catch (error) {
        throw createHttpError(error);
      }
    }),
  check("mobile")
    .isMobilePhone("bn-BD", { strictMode: true })
    .withMessage("Mobile number must be Bangladeshi mobile number!"),
  check("password").isStrongPassword().withMessage("Password must be strong!"),
];
module.exports = addUserValidator;
