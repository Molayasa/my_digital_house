const express = require('express');
const indexController = require('../controllers/index-controller');

const indexRouter = express.Router();

indexRouter.get('/', indexController.getIndex);

module.exports = indexRouter;
