const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const abonnementSchema = new Schema(
  {
    Registredecommerce: {
      type: String,
      required: true,
    },
    raisonsosial: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    telephone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    datedebut: {
      type: String,
      required: true,
    },
    datafin: {
      type: String,
      required: true,
    },
    etat: {
      type: String,
      required: true,
    },
    users: [  String  ]
    ,
    DirecteurId: { type: mongoose.Types.ObjectId, ref: "Directeur" },
  },
  {
    timestamps: true,
    // toJSON: {
    //     transform(doc,ret) {
    //         delete ret.password
    //     }
    // }
  }
);

const Abonnement = mongoose.model("Abonnement", abonnementSchema);

module.exports = Abonnement;
