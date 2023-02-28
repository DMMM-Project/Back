const Category = require('../models/Category');

exports.getAllCategories = (req, res, next) => {
    Category.find()
        .then(category => {
            let categories = [];
            category.forEach(category => {
                if(category.alim_grp_code >= 0){
                    categories.push({ alim_grp_code : category.alim_grp_code, alim_grp_nom_fr : category.alim_grp_nom_fr });
                }
            })
            res.status(200).json({ categories: categories});
        })
        .catch(error => res.status(400).json({ error }));
};

exports.getAllSubCategories = (req, res, next) => {
    Category.find()
        .then(category => {
            let categories = [];
            category.forEach(category => {
                if(category.alim_ssgrp_code >= 0){
                    categories.push({ alim_grp_code : category.alim_ssgrp_code, alim_grp_nom_fr : category.alim_ssgrp_nom_fr});
                }
            })
            res.status(200).json({ categories: categories});
        })
        .catch(error => res.status(400).json({ error }));
};

exports.getAllSubSubCategories = (req, res, next) => {
    Category.find()
        .then(category => {
            let categories = [];
            category.forEach(category => {
                if(category.alim_ssssgrp_code >= 0){
                    categories.push({ alim_grp_code : category.alim_ssssgrp_code, alim_grp_nom_fr : category.alim_ssssgrp_nom_fr});
                }
            })
            res.status(200).json({ categories: categories});
        })
        .catch(error => res.status(400).json({ error }));
};
