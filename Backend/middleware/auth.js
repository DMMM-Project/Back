const jwt = require('jsonwebtoken');
const User = require("../models/User");
const MessageJson = require('../models/MessageJson');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        req.auth = {
            userId: userId
        };
        User.findOne({ _id: userId})
            .then(user => {
                if (!user) {
                    return res.status(401).json(MessageJson.makeMessageJson(null, null, 'Unauthorized'));
                }
                next();
            })
            .catch(error => {
                return res.status(500).json(MessageJson.makeMessageJson(null, null, error));
            });
    } catch(error) {
        return res.status(401).json(MessageJson.makeMessageJson(null, null, 'Unauthorized'));
    }
};