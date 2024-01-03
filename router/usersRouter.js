const express = require("express");
const {
  usersController,
  addUsersController,
  deleteUsersController,
} = require("../controller/usersController");
const decorateHtml = require("../middlewares/common/decorateHtml");
const photoUpload = require("../middlewares/userPhotoUpload/photoUpload");
const {
  addUserValidator,
  addUserValidationHandler,
} = require("../validators/usersValidator");

const usersRouter = express.Router();

usersRouter.get("/", decorateHtml("Users"), usersController);
usersRouter.post(
  "/add",
  photoUpload,
  addUserValidator,
  addUserValidationHandler,
  addUsersController
);
usersRouter.delete("/:userId", deleteUsersController);

module.exports = usersRouter;
