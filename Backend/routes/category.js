const express = require('express');
const router = express.Router();

const categoryCtrl = require('../controllers/category');
const auth = require("../middleware/auth");

router.get('/', auth, categoryCtrl.getAllCategories);
router.get('/subcategories', auth, categoryCtrl.getAllSubCategories);
router.get('/subsubcategories', auth, categoryCtrl.getAllSubSubCategories);

module.exports = router;