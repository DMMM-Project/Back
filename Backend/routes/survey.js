const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const stuffCtrl = require('../controllers/survey');

router.post('/my', auth, stuffCtrl.createSurvey);
router.get('/', stuffCtrl.getAllSurvey);
router.get('/my', auth, stuffCtrl.getMySurvey);

module.exports = router;