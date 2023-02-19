const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const SurveySchema = mongoose.Schema({
    user_id: { type: String, required: true, unique: true },
    aliments: { type: Array, required: true }
}, {
    versionKey: false // You should be aware of the outcome after set to false
});

SurveySchema.plugin(uniqueValidator);

module.exports = mongoose.model('Survey', SurveySchema);