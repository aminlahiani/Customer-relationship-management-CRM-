const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const CabinetSchema = new Schema(
  {
    
    nom    : {   
        type: String,
        required: true,
      },
    email: {
      type: String,
      required: true,
    },
    medical_evet : {
      type: String,
      required: true,
    },
    adresse : {
        type: String,
        required: true,
    },
    publication :{
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
    Medcienid : { type: mongoose.Types.ObjectId, ref: "Medcien" },
    secretaireId :{ type: mongoose.Types.ObjectId, ref: "Secretaire" }
  },
  { timestamps: true }
);

const Cabinet = mongoose.model("Cabinet", CabinetSchema);

module.exports = Cabinet ;