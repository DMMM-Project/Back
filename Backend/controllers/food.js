const Food = require('../models/Food');

exports.getFoodByCategories = (req, res, next) => {
    Food.find({ alim_grp_nom_fr: req.body.alim_grp_nom_fr, alim_ssgrp_nom_fr: req.body.alim_ssgrp_nom_fr, alim_ssssgrp_nom_fr: req.body.alim_ssssgrp_nom_fr })
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

exports.getFoodByName = (req, res, next) => {
    Food.findOne({ alim_nom_fr: req.body.alim_nom_fr })
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

exports.getFoodById = (req, res, next) => {
    Food.findOne({ alim_code: req.body.alim_code })
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