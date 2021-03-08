const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const PharmacieSchema = new Schema(
  {
    registre_de_commerce : {
      type: String,
      required: true,
    },
    raison_sosial    : {   
        type: String,
        required: true,
      },
    email: {
      type: String,
      required: true,
    },
    adresse : {
      type: String,
      required: true,
    },
    latitude :{
        type: String,
        required: true,
    },
    longitude : {
        type: String,
        required: true,
    },
    PharmacienId : { type: mongoose.Types.ObjectId, ref: "Pharmacien" },
    PersonelId :{ type: mongoose.Types.ObjectId, ref: "Personel" },
    PreparateurPrincipalId : [{ type: mongoose.Types.ObjectId, ref: "PreparateurPrincipal" } ],
  },
  { timestamps: true }
);


const Pharmacie = mongoose.model("Pharmacie", PharmacieSchema);

module.exports = Pharmacie ;