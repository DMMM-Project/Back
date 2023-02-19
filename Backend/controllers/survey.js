const Survey = require('../models/Survey');
const User = require('../models/User');

exports.createSurvey = (req, res, next) => {
    User.findOne({ _id: req.auth.userId})
        .then(() => {
            delete req.body._id;
            const survey = new Survey({
                user_id: req.auth.userId,
                aliments: req.body.aliments
            });
            survey.save()
                .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
                .catch(error => res.status(400).json({ error }));
        })
        .catch( error => {
            res.status(500).json({ error });
        });
};

exports.getAllSurvey = (req, res, next) => {
    Survey.find()
        .then(survey => res.status(200).json(survey))
        .catch(error => res.status(400).json({ error }));
};

exports.getMySurvey = (req, res, next) => {
    Survey.findOne({ user_id: req.auth.userId})
        .then(survey => res.status(200).json(survey))
        .catch( error => {
            res.status(500).json({ error });
        });
};