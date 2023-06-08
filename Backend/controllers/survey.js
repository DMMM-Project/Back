const Survey = require('../models/Survey');
const User = require('../models/User');
const MessageJson = require('../models/MessageJson');

updateUser = (userId) => {
    User.findOne({ _id: userId})
        .then(user => {
            user.survey = true;
            user.save();
        })
        .catch(error => {
            throw ({ error });
        });
}

exports.createSurvey = (req, res, next) => {
    User.findOne({ _id: req.auth.userId})
        .then(() => {
            delete req.body._id;
            const survey = new Survey({
                user_id: req.auth.userId,
                aliments: req.body.aliments
            });

            survey.save()
                .then(() => {
                    updateUser(req.auth.userId);
                    return res.status(201).json(MessageJson.makeMessageJson('Survey saved !',null,null));
                })
                .catch(error => {
                    try {
                        if (error.errors['user_id']) {
                            return res.status(401).json(MessageJson.makeMessageJson(null, null, 'You have already completed the survey !'));
                        }
                    } catch (error) {
                        return res.status(400).json(MessageJson.makeMessageJson(null, null, error));
                    }
                });

        })
        .catch( error => {
            return res.status(500).json(MessageJson.makeMessageJson(null, null, error));
        })
};

exports.getAllSurvey = (req, res, next) => {
    Survey.find()
        .then(survey => {
            let surveys = [];
            survey.forEach(survey => {
                surveys.push({ aliments : survey.aliments});
            })
            return res.status(200).json(MessageJson.makeMessageJson(null, { surveys: surveys}, null));
        })
        .catch(error => { return res.status(400).json(MessageJson.makeMessageJson(null, null, error)); });
};

exports.getMySurvey = (req, res, next) => {
    Survey.findOne({ user_id: req.auth.userId})
        .then(survey => {
            return res.status(200).json(MessageJson.makeMessageJson(null, { aliments: survey.aliments}, null));
        })
        .catch( error => {
            if(error.message === "Cannot read properties of null (reading 'aliments')") {
                return res.status(401).json(MessageJson.makeMessageJson(null, null, 'You have not completed the survey !'));
            }
            return res.status(500).json(MessageJson.makeMessageJson(null, null, error));
        });
};