const express = require("express");
const app = express();
const connect = require("./Config/db");

const userController = require("./Controllers/user.controller");

app.use(express.json());
app.use("/user", userController);

const start = async (PORT) => {
  await connect();
  app.listen(PORT, () => {
    console.log("Current Server is Running on PORT", PORT);
  });
};

module.exports = start;
