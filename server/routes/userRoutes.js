const express = require("express");
const {
  signup,
  signin,
  name,
  authenticateJwt,
  inputValidation,
  game,
  move,
} = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/signup", inputValidation, signup);

userRouter.post("/signin", signin);

userRouter.get("/me", authenticateJwt, name);

userRouter.post("/game", authenticateJwt, game);

userRouter.post("/move", authenticateJwt, move);

module.exports = userRouter;
