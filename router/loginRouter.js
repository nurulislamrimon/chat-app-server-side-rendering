const express = require("express");
const { logingController } = require("../controller/loginController");

const loginRouter = express.Router();

loginRouter.get("/", logingController);

module.exports = loginRouter;
