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
                    return res.status(201).json({
                        message: 'User created !',
                        survey: user.survey,
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '365d' }
                        )
                    });
                })
                .catch(error => { return res.status(500).json({ error }); });
        })
        .catch(error => {
            let main_Error = error;
            try {
                if (error.errors['telephone']){
                    return res.status(401).json({ error: 'You have already created an account' });
                }
            }catch (error) {
                return res.status(400).json({ main_Error });
            }
        });
};

exports.login = (req, res, next) => {
    User.findOne({ naissance: req.body.naissance, telephone: req.body.telephone })
        .then(user => {
            return res.status(302).json({
                message: 'User found!',
                survey: user.survey,
                token: jwt.sign(
                    { userId: user._id },
                    'RANDOM_TOKEN_SECRET',
                    { expiresIn: '365d' }
                )
            });
        })
        .catch(error => { return res.status(500).json({ error }); });
};