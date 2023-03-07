const Survey = require('../models/Survey');
const User = require('../models/User');

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
                    return res.status(201).json({message: 'Survey saved !'});
                })
                .catch(error => {
                    let main_Error = error;
                    try {
                        if (error.errors['user_id']) {
                            return res.status(401).json({error: 'You have already completed the survey !'});
                        }
                    } catch (error) {
                        return res.status(400).json({ main_Error });
                    }
                });

        })
        .catch( error => {
            return res.status(500).json({ error });
        })
};

exports.getAllSurvey = (req, res, next) => {
    Survey.find()
        .then(survey => {
            let surveys = [];
            survey.forEach(survey => {
                surveys.push({ aliments : survey.aliments});
            })
            return res.status(200).json({ surveys: surveys});
        })
        .catch(error => { return res.status(400).json({ error }); });
};

exports.getMySurvey = (req, res, next) => {
    Survey.findOne({ user_id: req.auth.userId})
        .then(survey => {
            return res.status(200).json({ aliments: survey.aliments});
        })
        .catch( error => {
            return res.status(500).json({ error });
        });
};