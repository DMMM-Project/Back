const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const SurveySchema = mongoose.Schema({
    user_id: { type: String, required: true, unique: true },
    aliments: { type: Array, required: true }
});

SurveySchema.plugin(uniqueValidator);

module.exports = mongoose.model('Survey', SurveySchema);