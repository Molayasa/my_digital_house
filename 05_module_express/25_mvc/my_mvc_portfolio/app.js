const express = require("express");
const path = require("path");
const mainRouter = require("./routers/main-router");

const PORT = 5000;
const app = express();

app.use(express.static("public"));

app.use("/", mainRouter);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
