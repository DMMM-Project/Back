const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// exemple d'appel aux données : console.log(food["Energie, Règlement UE N° 1169/2011 (kJ/100 g)"]);

const userSchema = mongoose.Schema({
    alim_code: { type: Number, required: true },
    alim_nom_fr: { type: String, required: true },
    alim_grp_code: { type: Number, required: true },
    alim_ssgrp_code: { type: Number, required: true },
    alim_ssssgrp_code: { type: Number, required: true },
    alim_grp_nom_fr: { type: String, required: true },
    alim_ssgrp_nom_fr: { type: String, required: true },
    alim_ssssgrp_nom_fr: { type: String, required: true },
    "Energie, Règlement UE N° 1169/2011 (kJ/100 g)" : { type: String, required: true },
    "Energie, Règlement UE N° 1169/2011 (kcal/100 g)" : { type: String, required: true },
    "Energie, N x facteur Jones, avec fibres  (kJ/100 g)" : { type: String, required: true },
    "Energie, N x facteur Jones, avec fibres  (kcal/100 g)" : { type: String, required: true },
    "Eau (g/100 g)" : { type: String, required: true },
    "Protéines, N x facteur de Jones (g/100 g)" : { type: String, required: true },
    "Protéines, N x 625 (g/100 g)" : { type: String, required: true },
    "Glucides (g/100 g)" : { type: String, required: true },
    "Lipides (g/100 g)" : { type: String, required: true },
    "Sucres (g/100 g)" : { type: String, required: true },
    "Fructose (g/100 g)" : { type: String, required: true },
    "Galactose (g/100 g)" : { type: String, required: true },
    "Glucose (g/100 g)" : { type: String, required: true },
    "Lactose (g/100 g)" : { type: String, required: true },
    "Maltose (g/100 g)" : { type: String, required: true },
    "Saccharose (g/100 g)" : { type: String, required: true },
    "Amidon (g/100 g)" : { type: String, required: true },
    "Fibres alimentaires (g/100 g)" : { type: String, required: true },
    "Polyols totaux (g/100 g)" : { type: String, required: true },
    "Cendres (g/100 g)" : { type: String, required: true },
    "Alcool (g/100 g)" : { type: String, required: true },
    "Acides organiques (g/100 g)" : { type: String, required: true },
    "AG saturés (g/100 g)" : { type: String, required: true },
    "Cholestérol (mg/100 g)" : { type: String, required: true },
    "Sel chlorure de sodium (g/100 g)" : { type: String, required: true },
    "Calcium (mg/100 g)" : { type: String, required: true },
    "Chlorure (mg/100 g)" : { type: String, required: true },
    "Cuivre (mg/100 g)" : { type: String, required: true },
    "Fer (mg/100 g)" : { type: String, required: true },
    "Iode (µg/100 g)" : { type: String, required: true },
    "Magnésium (mg/100 g)" : { type: String, required: true },
    "Manganèse (mg/100 g)" : { type: String, required: true },
    "Phosphore (mg/100 g)" : { type: String, required: true },
    "Potassium (mg/100 g)" : { type: String, required: true },
    "Sélénium (µg/100 g)" : { type: String, required: true },
    "Sodium (mg/100 g)" : { type: String, required: true },
    "Zinc (mg/100 g)" : { type: String, required: true },
    "Rétinol (µg/100 g)" : { type: String, required: true },
    "Beta-Carotène (µg/100 g)" : { type: String, required: true },
    "Vitamine D (µg/100 g)" : { type: String, required: true },
    "Vitamine E (mg/100 g)" : { type: String, required: true },
    "Vitamine K1 (µg/100 g)" : { type: String, required: true },
    "Vitamine K2 (µg/100 g)" : { type: String, required: true },
    "Vitamine C (mg/100 g)" : { type: String, required: true },
    "Vitamine B1 ou Thiamine (mg/100 g)" : { type: String, required: true },
    "Vitamine B2 ou Riboflavine (mg/100 g)" : { type: String, required: true },
    "Vitamine B3 ou PP ou Niacine (mg/100 g)" : { type: String, required: true },
    "Vitamine B5 ou Acide pantothénique (mg/100 g)" : { type: String, required: true }
}, {
    versionKey: false // You should be aware of the outcome after set to false
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Food', userSchema, "food");