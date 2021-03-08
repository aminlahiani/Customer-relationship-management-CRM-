const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const PersonelSchema = new Schema(
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


const Personel = mongoose.model("Personel", PersonelSchema);

module.exports = Personel ;