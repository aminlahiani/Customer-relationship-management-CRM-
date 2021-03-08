const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SecretaireSchema = new Schema(
  {
    nom   : {   
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


const Secretaire = mongoose.model("Secretaire", SecretaireSchema);

module.exports = Secretaire ;