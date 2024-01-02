const express = require("express");
const { usersController } = require("../controller/usersController");
const decorateHtml = require("../middlewares/common/decorateHtml");

const usersRouter = express.Router();

usersRouter.get("/", decorateHtml("Users - Chat Application"), usersController);

module.exports = usersRouter;
