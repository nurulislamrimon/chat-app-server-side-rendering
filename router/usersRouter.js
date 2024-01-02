const express = require("express");
const { usersController } = require("../controller/usersController");

const usersRouter = express.Router();

usersRouter.get("/", usersController);

module.exports = usersRouter;
