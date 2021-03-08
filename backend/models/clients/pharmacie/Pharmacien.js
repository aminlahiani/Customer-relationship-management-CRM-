const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const PharmacienSchema = new Schema(
  {
   
    nom    : {   
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


const Pharmacien = mongoose.model("Pharmacien", PharmacienSchema);

module.exports = Pharmacien ;