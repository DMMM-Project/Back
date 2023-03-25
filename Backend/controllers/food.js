const Food = require('../models/Food');
const MessageJson = require('../models/MessageJson');

exports.getFoodByCategories = (req, res, next) => {
    Food.find({ alim_ssgrp_code: req.query.alim_ssgrp_code, alim_ssssgrp_code: req.query.alim_ssssgrp_code })
        .then(food => {
            if (!food) {
                return res.status(500).json(MessageJson.makeMessageJson(null, null, 'Internal Server Error'));
            }
            let foods = [];
            food.forEach(food => {
                foods.push({ alim_code: food.alim_code, alim_nom_fr: food.alim_nom_fr });
            })
            return res.status(200).json(MessageJson.makeMessageJson(null, { foods: foods}, null));
        })
        .catch( error => {
            return res.status(500).json(MessageJson.makeMessageJson(null, null, error));
        });
};

exports.getFoodById = (req, res, next) => {
    Food.findOne({ alim_code: req.query.alim_code })
        .then(food => {
            if (!food) {
                return res.status(500).json(MessageJson.makeMessageJson(null, null, 'Internal Server Error'));
            }
            return res.status(200).json(MessageJson.makeMessageJson(null,{ food: food}, null));
        })
        .catch( error => {
            return res.status(500).json(MessageJson.makeMessageJson(null, null, error));
        });
};