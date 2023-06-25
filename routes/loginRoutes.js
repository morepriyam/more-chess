const express = require("express");
const { signup, signin } = require("../controllers/loginController");
const loginRouter = express.Router();

loginRouter.post("/signup", signup);

loginRouter.post("/signin", signin);

module.exports = loginRouter;
