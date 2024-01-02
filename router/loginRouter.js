const express = require("express");
const { loginController } = require("../controller/loginController");
const decorateHtml = require("../middlewares/common/decorateHtml");

const loginRouter = express.Router();

loginRouter.get("/", decorateHtml("Login - Chat Application"), loginController);

module.exports = loginRouter;
