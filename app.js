var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var racesRouter = require("./routes/Races");
var doggoRouter = require("./routes/doggo");
var app = express();
const mongoose = require("mongoose");

const url =
  "mongodb+srv://bssbrit:123@cluster0.bssqdsh.mongodb.net/doggoStorage?retryWrites=true&w=majority";
mongoose
  .connect(url)
  .then((result) => {
    app.listen(3000);
    console.log("connected to DB");
  })
  .catch((err) => console.log(err));
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/races", racesRouter);
app.use("/doggo", doggoRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
