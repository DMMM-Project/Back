const Category = require('../models/Category');
const MessageJson = require('../models/MessageJson');

exports.getAllCategories = (req, res, next) => {
    Category.find()
        .then(category => {
            let categories = [];
            category.forEach(category => {
                if(category.alim_grp_code >= 0){
                    categories.push({ alim_grp_code : category.alim_grp_code, alim_grp_nom_fr : category.alim_grp_nom_fr });
                }
            })
            res.status(200).json(MessageJson.makeMessageJson(null, { categories: categories}, null));
        })
        .catch(error => res.status(400).json(MessageJson.makeMessageJson(null, null, error)));
};

exports.getAllSubCategories = (req, res, next) => {
    Category.find()
        .then(category => {
            let categories = [];
            category.forEach(category => {
                if(category.alim_ssgrp_code >= 0 && category.alim_ssgrp_code > Number(req.query.alim_grp_code) * 100 && category.alim_ssgrp_code < (Number(req.query.alim_grp_code) + 1) * 100){
                    categories.push({ alim_grp_code : category.alim_ssgrp_code, alim_grp_nom_fr : category.alim_ssgrp_nom_fr});
                }
            })
            res.status(200).json(MessageJson.makeMessageJson(null, { categories: categories}, null));
        })
        .catch(error => res.status(400).json(MessageJson.makeMessageJson(null, null, error)));
};

exports.getAllSubSubCategories = (req, res, next) => {
    Category.find()
        .then(category => {
            let categories = [];
            category.forEach(category => {
                if(category.alim_ssssgrp_code >= 0 && category.alim_ssssgrp_code > Number(req.query.alim_grp_code) * 100 && category.alim_ssssgrp_code < (Number(req.query.alim_grp_code) + 1) * 100){
                    categories.push({ alim_grp_code : category.alim_ssssgrp_code, alim_grp_nom_fr : category.alim_ssssgrp_nom_fr});
                }
            })
            res.status(200).json(MessageJson.makeMessageJson(null, { categories: categories}, null));
        })
        .catch(error => res.status(400).json(MessageJson.makeMessageJson(null, null, error)));
};
