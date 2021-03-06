const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const VisiteurSchema = new Schema(
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
    role: {
      type: String,
      required: true,
    },
    telephone: {
      type: String,
      required: true,
    },

    createdby : { type: {type: String, required: true}, _id: {type: String, required: true} },
    superviseurid : { type: mongoose.Types.ObjectId, ref: "Superviseur" },
    abonnementId: { type: mongoose.Types.ObjectId, ref: "Abonnement" },
  },
  { timestamps: true }
);

VisiteurSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;

  return userObject;
};
VisiteurSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id.toString(), role: user.role },
    "thisismynewcourse"
  );

  return token;
};

VisiteurSchema.statics.findByCredentials = async (email, password) => {
  const user = await Visiteur.findOne({ email });

  if (!user) {
    throw new Error("Unable to login");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Unable to login");
  }

  return user;
};

VisiteurSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

const Visiteur = mongoose.model("Delegue", VisiteurSchema);

module.exports = Visiteur;
