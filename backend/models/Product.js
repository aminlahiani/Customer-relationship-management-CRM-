const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const PharmacieSchema = new Schema(
  {
    nom : {
      type: String,
      required: true,
    },
    prixgrosiste    : {   
        type: String,
        required: true,
      },
    prixpharmacie: {
      type: String,
      required: true,
    },
    etat : {
      type: String,
      required: true,
    },
    fichedeproduit :{
        type: String,
        required: true,
    },

  },
  { timestamps: true }
);


const Pharmacie = mongoose.model("Pharmacie", PharmacieSchema);

module.exports = Pharmacie ;