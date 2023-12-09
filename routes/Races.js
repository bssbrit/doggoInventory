const express = require("express");
var router = express.Router();
const { Race, Doggo } = require("../models/doggos");

router.get("/", function (req, res, next) {
  Race.find()
    .then((result) => {
      res.render("Races", { title: "DoggoInventory", races: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Race.findById(id)
    .then((result) => {
      res.render("raceDetails", { race: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
