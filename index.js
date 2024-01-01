const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();

dotenv.config();

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successful!");
  })
  .catch((e) => console.log(`DB connection error: ${e}`));

// request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

// set public folder
app.use(express.static(path.join(__dirname, "public")));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup

// error handling

app.listen(process.env.PORT, () => {
  console.log(`App listening at port: ${process.env.PORT}`);
});
