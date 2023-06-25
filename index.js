const express = require("express");
const mongoose = require("mongoose");
const loginRouter = require("./routes/loginRoutes");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = 3001;

app.use(bodyParser.json());

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
  res.sendFile(path.join(__dirname, "index.html"));
});

//signup and signin is in the users route
app.use("/getstarted", loginRouter);
