const Food = require('../models/Food');

exports.getFoodByCategories = (req, res, next) => {
    Food.find({ alim_ssgrp_code: req.query.alim_ssgrp_code, alim_ssssgrp_code: req.query.alim_ssssgrp_code })
        .then(food => {
            if (!food) {
                return res.status(500).json({error: 'Internal Server Error'});
            }
            let foods = [];
            food.forEach(food => {
                foods.push({ alim_code: food.alim_code, alim_nom_fr: food.alim_nom_fr });
            })
            return res.status(200).json({ foods: foods});
        })
        .catch( error => {
            return res.status(500).json({ error });
        });
};

exports.getFoodById = (req, res, next) => {
    Food.findOne({ alim_code: req.query.alim_code })
        .then(food => {
            if (!food) {
                return res.status(500).json({error: 'Internal Server Error'});
            }
            return res.status(200).json({ food: food});
        })
        .catch( error => {
            return res.status(500).json({ error });
        });
};