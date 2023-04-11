const express = require("express");
const detailsController = require("../controllers/details-controller");

const detailsRouter = express.Router();

detailsRouter.get("/:menuId", detailsController.getDetails);

module.exports = detailsRouter;
