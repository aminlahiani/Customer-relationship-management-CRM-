const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const DirecteurSchema = new Schema(
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
        createdby: { type: mongoose.Types.ObjectId, ref: "Gerant" },
        delegue: [{ type: mongoose.Types.ObjectId, ref: "Delegue" }]
    },
    { timestamps: true }
);

DirecteurSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();

    delete userObject.password;

    return userObject;
};
DirecteurSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString(), role: user.role }, "thisismynewcourse");

    return token;
};

DirecteurSchema.statics.findByCredentials = async (email, password) => {
    const user = await Directeur.findOne({ email });

    if (!user) {
        throw new Error("Unable to login");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error("Unable to login");
    }

    return user;
};

DirecteurSchema.pre("save", async function (next) {
    const user = this;

    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8);
    }

    next();
});

const Directeur = mongoose.model("Directeur", SuperviseurSchema);

module.exports = Directeur;
