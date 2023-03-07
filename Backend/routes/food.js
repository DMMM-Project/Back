const express = require('express');
const router = express.Router();

const foodCtrl = require('../controllers/food');
const auth = require("../middleware/auth");

router.get('/categories', auth, foodCtrl.getFoodByCategories);
router.get('/name', auth, foodCtrl.getFoodByName);
router.get('/id', auth, foodCtrl.getFoodById);


module.exports = router;