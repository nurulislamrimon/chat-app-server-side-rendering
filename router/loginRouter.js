const express = require("express");
const {
  getLoginController,
  loginController,
  getHomeController,
  logoutController,
} = require("../controller/loginController");
const decorateHtml = require("../middlewares/common/decorateHtml");

const loginRouter = express.Router();

loginRouter.get("/", decorateHtml("Home"), getHomeController);

loginRouter.get("/login", decorateHtml("Login"), getLoginController);

loginRouter.post("/login", decorateHtml("Users"), loginController);

loginRouter.delete("/logout", decorateHtml("Log out"), logoutController);

module.exports = loginRouter;
