const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const MessageJson = require('../models/MessageJson');


exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            req.body.password = hash;
            const user = new User({
                ...req.body,
                survey: false
            });
            user.save()
                .then(() => {
                    User.findOne({ telephone: req.body.telephone })
                        .then(user => {
                            return res.status(201).json(MessageJson.makeMessageJson(
                                'User created !',
                                {
                                    username: user.prenom,
                                    survey: user.survey,
                                    token: jwt.sign(
                                        { userId: user._id },
                                        'RANDOM_TOKEN_SECRET',
                                        { expiresIn: '365d' }
                                    )
                                },
                                null)
                            );
                        })
                        .catch(error => { return res.status(500).json(MessageJson.makeMessageJson(null, null, error)); });
                })
                .catch(mainerror => {
                    try {
                        if (mainerror.errors['telephone']){
                            return res.status(401).json(MessageJson.makeMessageJson( null, null, 'You have already created an account'));
                        }
                    }catch (error) {
                        return res.status(500).json(MessageJson.makeMessageJson(null, null, mainerror));
                    }
                });
        })
        .catch(error => { return res.status(500).json(MessageJson.makeMessageJson(null, null, error)); });
};

exports.login = (req, res, next) => {
    User.findOne({ telephone: req.body.telephone })
        .then(user => {
            if(!user)
                return res.status(401).json(MessageJson.makeMessageJson(null, null, 'User not found!'));

            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json(MessageJson.makeMessageJson(null, null, 'Paire login/mot de passe incorrecte'));
                    }
                    return res.status(302).json(MessageJson.makeMessageJson(
                        'User found!',
                        {
                            username: user.prenom,
                            survey: user.survey,
                            token: jwt.sign(
                                { userId: user._id },
                                'RANDOM_TOKEN_SECRET',
                                { expiresIn: '365d' }
                            )
                        },
                        null)
                    );
                })
                .catch(error => res.status(500).json({ error }));

        })
        .catch(error => { return res.status(500).json(MessageJson.makeMessageJson(null, null, error)); });
};

exports.verify = (req, res, next) => {
    User.findOne({ _id: req.auth.userId })
        .then(user => {
            return res.status(302).json(MessageJson.makeMessageJson(
                'User found!',
                {
                    username: user.prenom,
                    survey: user.survey
                },
                null)
            );
        })
        .catch(error => { return res.status(500).json(MessageJson.makeMessageJson(null, null, error)); });
};