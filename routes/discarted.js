/* 
const sampleDoggos = [
  {
    doggoName: "Max",
    color: "Yellow",
    price: "$500",
  },
  {
    doggoName: "Lola",
    color: "Fawn",
    price: "$600",
  },
  {
    doggoName: "Rocky",
    color: "Black and Tan",
    price: "$550",
  },
  {
    doggoName: "Bella",
    color: "Apricot",
    price: "$700",
  },
  {
    doggoName: "Charlie",
    color: "Cream",
    price: "$650",
  },
];

const sampleRaces = [
  {
    raceName: "Labrador Retriever",
    Syze: "Large",
  },
  {
    raceName: "French Bulldog",
    Syze: "Small",
  },
  {
    raceName: "German Shepherd",
    Syze: "Large",
  },
  {
    raceName: "Poodle",
    Syze: "Medium",
  },
  {
    raceName: "Dachshund",
    Syze: "Small",
  },
];
router.get("/add-samples", (req, res) => {
  sampleRaces.forEach((race) => {
    const newRace = new Race(race);
    newRace
      .save()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  sampleDoggos.forEach((doggo) => {
    const newDoggo = new Doggo(doggo);
    newDoggo
      .save()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  res.redirect("/");
});
 */
