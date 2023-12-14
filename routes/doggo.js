const express = require("express");
var router = express.Router();
const { Race, Doggo } = require("../models/doggos");

router.post("/newDoggo", (req, res) => {
  const data = req.body;
  console.log(console.log(data));
  const newDoggo = new Doggo({
    doggoName: data.doggoName,
    color: data.doggoColor,
    price: data.price,
    race: data.raceId,
  });
  newDoggo
    .save()
    .then((result) => {
      console.log("Aqui 1");
      console.log(result._id);
      Race.findById(data.raceId).then((foundRace) => {
        console.log("Aqui 2");
        console.log(foundRace);

        const updatedRace = new Race(foundRace);
        updatedRace.doggos.push(result._id);
        updatedRace
          .save()
          .then(() => {
            console.log("Sucesso");
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch((error) => {
      console.log(error);
    });
  res.redirect(`/races/${data.raceId}`);
});

module.exports = router;
