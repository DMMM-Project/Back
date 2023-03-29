const jwt = require('jsonwebtoken');
const User = require('../models/User');
const MessageJson = require('../models/MessageJson');

exports.signup = (req, res, next) => {
    const user = new User({
        ...req.body,
        survey: false
    });
    user.save()
        .then(() => {
            User.findOne({ naissance: req.body.naissance, telephone: req.body.telephone })
                .then(user => {
                    return res.status(201).json(MessageJson.makeMessageJson(
                        'User created !',
                        {
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
        .catch(error => {
            try {
                if (error.errors['telephone']){
                    return res.status(401).json(MessageJson.makeMessageJson( null, null, 'You have already created an account'));
                }
            }catch (error) {
                return res.status(500).json(MessageJson.makeMessageJson(null, null, error));
            }
        });
};

exports.login = (req, res, next) => {
    User.findOne({ naissance: req.body.naissance, telephone: req.body.telephone })
        .then(user => {
            if(!user)
                return res.status(401).json(MessageJson.makeMessageJson(null, null, 'User not found!'));
            return res.status(302).json(MessageJson.makeMessageJson(
                'User found!',
                {
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
};