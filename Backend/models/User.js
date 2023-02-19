const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    naissance: { type: String, required: true },
    adresse: { type: String, required: true },
    code_postal: { type: Number, required: true },
    ville: { type: String, required: true },
    telephone: { type: String, required: true,unique: true }
}, {
    versionKey: false // You should be aware of the outcome after set to false
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);