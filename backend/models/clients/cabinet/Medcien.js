const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MedcienSchema = new Schema(
  {
    etablisement_de_travail : {
        type: String,
        required: true,
      },
    nom : {   
        type: String,
        required: true,
      },
      prenom    : {   
        type: String,
        required: true,
      },
    email: {
      type: String,
      required: true,
    },
    telephone : {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
);

const Medcien = mongoose.model("Medcien", MedcienSchema);

module.exports = Medcien ;