const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const GerantSchema = new Schema(
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


const Gerant = mongoose.model("Gerant", GerantSchema);

module.exports = Gerant ;
