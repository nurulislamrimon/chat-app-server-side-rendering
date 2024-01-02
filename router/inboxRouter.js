const express = require("express");
const { inboxController } = require("../controller/inboxController");

const inboxRouter = express.Router();

inboxRouter.get("/", inboxController);

module.exports = inboxRouter;
