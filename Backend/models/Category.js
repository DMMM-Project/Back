const mongoose = require('mongoose');

const SurveySchema = mongoose.Schema({
    alim_grp_code: { type: Number, required: true },
    alim_ssgrp_code: { type: Number, required: true },
    alim_ssssgrp_code: { type: Number, required: true },
    alim_grp_nom_fr: { type: String, required: true },
    alim_ssgrp_nom_fr: { type: String, required: true },
    alim_ssssgrp_nom_fr: { type: String, required: true }
}, {
    versionKey: false // You should be aware of the outcome after set to false
});


module.exports = mongoose.model('Category', SurveySchema, 'categories');