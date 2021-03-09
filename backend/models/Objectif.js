const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const ObjectifSchema = new Schema(
  {
    objectif : {
      type: String,
      required: true,
    },
    usersid    : {   
        type: String,
        required: true,
      },
     budjet: {
      type: String,
      required: true,
    },
    produit : {
      type: String,
      required: true,
    },
    qty :{
        type: String,
        required: true,
    },

  },
  { timestamps: true }
);


const Objectif = mongoose.model("Objectif", ObjectifSchema);

module.exports = Objectif ;