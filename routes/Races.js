const express = require("express");
var router = express.Router();
const { Race, Doggo } = require("../models/doggos");
let racesArr;
router.get("/", function (req, res, next) {
  Race.find()
    .then((result) => {
      racesArr = result;
      res.render("Races", { title: "DoggoInventory", races: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/", (req, res) => {
  const data = req.body;
  const newRace = new Race({
    raceName: data.raceName,
    Syze: data.syze,
  });
  newRace
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/races");
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Race.findById(id)
    .then((result) => {
      res.render("raceDetails", { race: result, races: racesArr });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
