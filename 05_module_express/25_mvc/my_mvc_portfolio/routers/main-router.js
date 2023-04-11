// Digital Troll
/* const express = require("express")

const mainRouter = express.Router() */

const { Router } = require("express");
const mainController = require("../controllers/main-controller");

const mainRouter = Router();

mainRouter.get("/", mainController.getHome);

module.exports = mainRouter;
