const Survey = require('../models/Survey');
const User = require('../models/User');

//TODO: Faire en sorte qu'il n'y ai pas plusieurs réponses de l'api dans chaque fonction

updateUser = (userId) => {
    User.findOne({ _id: userId})
        .then(user => {
            user.survey = true;
            user.save();
        })
        .catch(error => {
            res.status(500).json({ error });
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
                    res.status(201).json({message: 'Objet enregistré !'});
                })
                .catch(error => {
                    main_Error = error;
                    try {
                        if (error.errors['user_id']) {
                            res.status(401).json({error: 'Vous avez déjà répondu au sondage'});
                        }
                    } catch (error) {
                        res.status(400).json({ main_Error });
                    }
                });

        })
        .catch( error => {
            res.status(500).json({ error });
        })
};

exports.getAllSurvey = (req, res, next) => {
    Survey.find()
        .then(survey => {
            surveys = [];
            survey.forEach(survey => {

                surveys.push({ aliments : survey.aliments});
            })
            res.status(200).json({ surveys: surveys});
        })
        .catch(error => res.status(400).json({ error }));
};

exports.getMySurvey = (req, res, next) => {
    Survey.findOne({ user_id: req.auth.userId})
        .then(survey => {
            res.status(200).json({ aliments: survey.aliments});
        })
        .catch( error => {
            res.status(500).json({ error });
        });
};