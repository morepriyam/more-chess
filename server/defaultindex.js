const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes");
const app = express();
const port = 3001;
const cors = require("cors");
// Enable CORS for all routes
app.use(cors());

app.use(express.json());

mongoose
  .connect("add your own monngodb link")
  .then(function () {
    app.listen(port, function () {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch(function (error) {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send("Backend for more-chess");
});

//signup and signin is in the users route
app.use("/user", userRouter);

//private routes
