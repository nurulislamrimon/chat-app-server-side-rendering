const express = require("express");
const {
  getLoginController,
  loginController,
} = require("../controller/loginController");
const decorateHtml = require("../middlewares/common/decorateHtml");

const loginRouter = express.Router();

loginRouter.get("/", decorateHtml("Login"), getLoginController);

loginRouter.post("/", decorateHtml("Users"), loginController);

module.exports = loginRouter;
