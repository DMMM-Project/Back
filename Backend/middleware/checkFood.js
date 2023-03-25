const Food = require("../models/Food");
const MessageJson = require('../models/MessageJson');

module.exports = (req, res, next) => {
    let good;
    try {
        good = true;
        req.body.aliments.forEach((aliment, index, array) => {
            Food.findOne({ alim_code: aliment })
                .then(food => {
                    if (!food) {
                        good = false;
                    }
                })
                .finally(() => {
                    if (array.length - 1 === index && good) {
                        next();
                    } else if (array.length - 1 === index && !good) {
                        return res.status(500).json(MessageJson.makeMessageJson('Food not found', null, 'Internal Server Error'));
                    }
                });
        });
    } catch (error) {
        res.status(401).json(MessageJson.makeMessageJson(null, null, error));
    }
};