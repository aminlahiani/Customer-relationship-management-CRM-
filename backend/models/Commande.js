const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommandeSchema = new Schema(
  {
  
     produtid :{ type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,},
        clientid :{ type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,},
        qty: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

const Commande = mongoose.model("Commande", CommandeSchema);

module.exports = Commande ;