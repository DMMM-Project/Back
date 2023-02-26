const Food = require("../models/Food");

module.exports = (req, res, next) => {
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
                    if(array.length - 1 === index && good) {
                        next();
                    } else if (array.length - 1 === index && !good) {
                        return res.status(500).json({error: 'Internal Server Error', context: 'Aliment introuvable'});
                    }
                });
        });
    } catch(error) {
        res.status(401).json({ error });
    }
};