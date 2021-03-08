const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const GrossisteSchema = new Schema(
  {
    nom: {
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
    
    adresse : {
      type: String,
      required: true,
    },
    GerantId : { type: mongoose.Types.ObjectId, ref: "Gerant" },
    responsble_achatId :{ type: mongoose.Types.ObjectId, ref: "ResponsbleAchat" },
    responsble_paymentId :{ type: mongoose.Types.ObjectId, ref: "ResponsblePayment" },
  },
  { timestamps: true }
);


const Grossiste = mongoose.model("Grossiste", GrossisteSchema);

module.exports = Grossiste ;
