const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const ChefSchema = new Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    telephone: {
      type: String,
      required: true,
    },
    isemailverife: {
      type: Boolean,
      required: true,
      default: false,
    },
    role: {
      type: String,
      required: true,
    },
    createdby : { type: {type: String, required: true}, _id: {type: String, required: true} },

    abonnementId: { type: mongoose.Types.ObjectId, ref: "Abonnement" },

    superviseurs: [{ type: mongoose.Types.ObjectId, ref: "Superviseur" }],
    delegue: [{ type: mongoose.Types.ObjectId, ref: "Delegue" }],
    visiteurs: [{ type: mongoose.Types.ObjectId, ref: "Visiteur" }],
  },
  { timestamps: true }
);

ChefSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;

  return userObject;
};
ChefSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id.toString(), role: user.role },
    "thisismynewcourse"
  );

  return token;
};

ChefSchema.statics.findByCredentials = async (email, password) => {
  const user = await Chef.findOne({ email });

  if (!user) {
    throw new Error("Unable to login");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Unable to login");
  }

  return user;
};

ChefSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

const Chef = mongoose.model("Chef", ChefSchema);

module.exports = Chef;
