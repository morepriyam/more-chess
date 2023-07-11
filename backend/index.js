const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes");
const app = express();
const port = 3000;

app.use(express.json());

mongoose
  .connect("mongodb+srv://admin:admin@peetcode.exl3xcn.mongodb.net/")
  .then(function () {
    app.listen(port, function () {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch(function (error) {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send("hello world");
});

//signup and signin is in the users route
app.use("/login", userRouter);
