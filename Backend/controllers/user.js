const jwt = require('jsonwebtoken');

const User = require('../models/User');

exports.signup = (req, res, next) => {
    const user = new User({
        ...req.body,
        survey: false
    });
    user.save()
        .then(() => {
            User.findOne({ naissance: req.body.naissance, telephone: req.body.telephone })
                .then(user => {
                    res.status(201).json({
                        message: 'Utilisateur créé !',
                        survey: user.survey,
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '365d' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => {
            main_Error = error;
            try {
                if (error.errors['telephone']){
                    res.status(401).json({ error: 'Vous avez déjà créer un compte' });
                }
            }catch (error) {
                res.status(400).json({ main_Error });
            }
        });
};

exports.login = (req, res, next) => {
    User.findOne({ naissance: req.body.naissance, telephone: req.body.telephone })
        .then(user => {
            return res.status(302).json({
                message: 'Utilisateur trouvé !',
                survey: user.survey,
                token: jwt.sign(
                    { userId: user._id },
                    'RANDOM_TOKEN_SECRET',
                    { expiresIn: '365d' }
                )
            });
        })
        .catch(error => res.status(500).json({ error }));
};