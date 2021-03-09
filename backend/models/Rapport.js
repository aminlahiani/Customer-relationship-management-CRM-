const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const RapposrtSchema = new Schema(
  {

    Rapport : {
      type: String,
      required: true,
    },


  },
  { timestamps: true }
);


const Rapport = mongoose.model("Rapport", RapposrtSchema);

module.exports = Rapport ;