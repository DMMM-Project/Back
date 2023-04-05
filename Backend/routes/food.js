const express = require('express');
const router = express.Router();

const foodCtrl = require('../controllers/food');
const auth = require("../middleware/auth");

router.get('/categories', auth, foodCtrl.getFoodByCategories);
router.get('/id', auth, foodCtrl.getFoodById);
router.get('/', auth, foodCtrl.getAllFood);


module.exports = router;