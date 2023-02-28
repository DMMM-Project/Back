const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

//TODO: ajouter les autres champs

const userSchema = mongoose.Schema({
    alim_code: { type: Number, required: true },
    alim_nom_fr: { type: String, required: true },
    alim_grp_code: { type: Number, required: true },
    alim_ssgrp_code: { type: Number, required: true },
    alim_ssssgrp_code: { type: Number, required: true },
    alim_grp_nom_fr: { type: String, required: true },
    alim_ssgrp_nom_fr: { type: String, required: true },
    alim_ssssgrp_nom_fr: { type: String, required: true }
}, {
    versionKey: false // You should be aware of the outcome after set to false
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Food', userSchema, "food");