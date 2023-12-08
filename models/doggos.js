const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const raceSchema = new Schema({
  raceName: {
    type: String,
    required: true,
  },
  Syze: {
    type: String,
    required: true,
  },
  doggos: [
    {
      type: Schema.Types.ObjectId,
      ref: "Doggo",
    },
  ],
});

const doggoSchema = new Schema({
  doggoName: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    default: "Free",
  },
  race: { type: Schema.Types.ObjectId, ref: "Race" },
});

const Doggo = mongoose.model("Doggo", doggoSchema);
const Race = mongoose.model("Race", raceSchema);

module.exports = { Race, Doggo };
