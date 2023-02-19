const jwt = require('jsonwebtoken');

const User = require('../models/User');

exports.signup = (req, res, next) => {
    const user = new User({
        ...req.body
    });
    user.save()
        .then(() => {
            User.findOne({ telephone: req.body.telephone })
                .then(user => {
                    if (!user) {
                        return res.status(500).json({ error: 'Internal Server Error' });
                    }
                    res.status(201).json({
                        message: 'Utilisateur créé !',
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '365d' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(400).json({ error }));
};

exports.login = (req, res, next) => {
    User.findOne({ prenom: req.body.prenom, nom: req.body.nom, telephone: req.body.telephone })
        .then(user => {
            return res.status(302).json({
                message: 'Utilisateur trouvé !',
                token: jwt.sign(
                    { userId: user._id },
                    'RANDOM_TOKEN_SECRET',
                    { expiresIn: '365d' }
                )
            });
        })
        .catch(error => res.status(500).json({ error }));
};