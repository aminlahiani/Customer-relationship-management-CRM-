const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const ProduitSchema = new Schema(
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


const Product = mongoose.model("Product", ProduitSchema);

module.exports = Product ;