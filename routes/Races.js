const express = require("express");
var router = express.Router();
const { Race } = require("../models/doggos");

router.get("/", function (req, res, next) {
  Race.find()
    .then((result) => {
      res.render("races", { races: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
