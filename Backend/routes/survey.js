const express = require('express');
const auth = require('../middleware/auth');
const checkFood = require('../middleware/checkFood');
const router = express.Router();

const stuffCtrl = require('../controllers/survey');

router.post('/my', auth, checkFood, stuffCtrl.createSurvey);
router.get('/', auth, stuffCtrl.getAllSurvey);
router.get('/my', auth, stuffCtrl.getMySurvey);

module.exports = router;