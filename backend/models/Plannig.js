const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const PlannigSchema = new Schema(

  {
    clientid : {
      type: String,
      required: true,
    },
    date    : {   
        type: String,
        required: true,
      },

  },
  { timestamps: true }
);


const Plannig = mongoose.model("Plannig", PlannigSchema);

module.exports = Plannig ;