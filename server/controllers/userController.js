const User = require("../models/user");
const zod = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Game = require("../models/game");
const secret_key = process.env.secret_key || "priyam";

const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await User.create({
      email: email,
      password: hashedPassword,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, secret_key);
    res.status(200).json({ user: result, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      secret_key
    );
    res.status(200).json({ user: existingUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const authenticateJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, secret_key, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

const inputValidation = (req, res, next) => {
  const { email, password } = req.body;
  const usernameResponse = emailSchema.safeParse(email);
  const passwordResponse = passwordSchema.safeParse(password);
  if (!usernameResponse.success || !passwordResponse.success) {
    return res
      .status(400)
      .json({ customError: "enter valid email, pwd - min 6 char" });
  }
  next();
};

const name = async (req, res) => {
  const user = req.user;
  const email = user.email;
  const name = email.split("@")[0].toUpperCase();
  res.status(200).json({ userName: name });
};

const game = async (req, res) => {
  try {
    const player = await User.findById(req.user.id);
    const existingGame = await Game.findOne({ user1: true });
    if (existingGame) {
      const updatedGame = await Game.findOneAndUpdate(
        { user1: true },
        { user2: player },
        { new: true }
      );
      return res.status(200).json({ message: "Game Started", updatedGame });
    } else {
      const newGame = new Game({ user1: player });
      const savedGame = await newGame.save();

      return res.status(201).json({ message: "New game created", savedGame });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const move = async (req, res) => {
  try {
    const fen = req.body.fen;
    const game = await Game.findOne({
      $or: [{ user1: req.user.id }, { user2: req.user.id }],
    });
    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }
    game.fen = fen;
    await game.save();
    res.status(200).json({ message: "Game updated", game });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  signup,
  signin,
  name,
  authenticateJwt,
  inputValidation,
  game,
  move,
};
