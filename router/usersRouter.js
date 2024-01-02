const express = require("express");
const {
  usersController,
  addUsersController,
} = require("../controller/usersController");
const decorateHtml = require("../middlewares/common/decorateHtml");

const usersRouter = express.Router();

usersRouter.get("/", decorateHtml("Users"), usersController);
usersRouter.post("/add", addUsersController);

module.exports = usersRouter;
