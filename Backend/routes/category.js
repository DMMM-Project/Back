const express = require('express');
const router = express.Router();

const categoryCtrl = require('../controllers/category');

router.get('/', categoryCtrl.getAllCategories);
router.get('/subcategories', categoryCtrl.getAllSubCategories);
router.get('/subsubcategories', categoryCtrl.getAllSubSubCategories);

module.exports = router;