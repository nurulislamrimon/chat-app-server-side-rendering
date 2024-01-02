const express = require("express");
const {
  usersController,
  addUsersController,
} = require("../controller/usersController");
const decorateHtml = require("../middlewares/common/decorateHtml");
const photoUpload = require("../middlewares/userPhotoUpload/photoUpload");
const addUserValidator = require("../validators/usersValidator");

const usersRouter = express.Router();

usersRouter.get("/", decorateHtml("Users"), usersController);
usersRouter.post("/add", photoUpload, addUserValidator, addUsersController);

module.exports = usersRouter;
