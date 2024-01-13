const express = require("express");
const {
  signup,
  signin,
  me,
  authenticateJwt,
  inputValidation
} = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/signup",inputValidation, signup);

userRouter.post("/signin", signin);

userRouter.get("/me", authenticateJwt, me);

module.exports = userRouter;
