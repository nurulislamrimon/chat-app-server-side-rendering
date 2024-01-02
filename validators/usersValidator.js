const { check, validationResult } = require("express-validator");
const User = require("../schemas/userSchema");
const createHttpError = require("http-errors");
const { unlink } = require("fs");
const path = require("path");

const addUserValidator = [
  check("name")
    .isLength({ min: 3 })
    .withMessage("Name is required!")
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

const addUserValidationHandler = (req, res, next) => {
  const errors = validationResult(req);
  const mappedErrors = errors.mapped();
  if (Object.keys(mappedErrors).length === 0) {
    next();
  } else {
    if (req.files.length > 0) {
      const { fileName } = req.files[0];
      console.log(fileName);
      unlink(
        path.join(__dirname, `/../public/uploads/user/${fileName}`),
        (err) => err && console.log(err)
      );
    }
  }
};
module.exports = { addUserValidator, addUserValidationHandler };
