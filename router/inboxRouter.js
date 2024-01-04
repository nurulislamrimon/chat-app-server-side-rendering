const express = require("express");
const { inboxController } = require("../controller/inboxController");
const decorateHtml = require("../middlewares/common/decorateHtml");
const checkAuthentication = require("../middlewares/common/checkAuthentication");

const inboxRouter = express.Router();

inboxRouter.get(
  "/",
  decorateHtml("Inbox"),
  checkAuthentication,
  inboxController
);

module.exports = inboxRouter;
