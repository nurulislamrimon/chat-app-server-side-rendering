const express = require("express");
const { inboxController } = require("../controller/inboxController");
const decorateHtml = require("../middlewares/common/decorateHtml");

const inboxRouter = express.Router();

inboxRouter.get("/", decorateHtml("Inbox"), inboxController);

module.exports = inboxRouter;
