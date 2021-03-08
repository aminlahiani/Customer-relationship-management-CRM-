const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const ResponsblePaymentSchema = new Schema(
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


const ResponsblePayment = mongoose.model("ResponsblePayment", ResponsblePaymentSchema);

module.exports = ResponsblePayment ;
