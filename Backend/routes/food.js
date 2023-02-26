const express = require('express');
const router = express.Router();

const foodCtrl = require('../controllers/food');

router.get('/categories', foodCtrl.getFoodByCategories);
router.get('/name', foodCtrl.getFoodByName);
router.get('/id', foodCtrl.getFoodById);


module.exports = router;