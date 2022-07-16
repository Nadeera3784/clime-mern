const express     = require('express');
const router      = express.Router();

const { AppController } = require('../controllers');
const { tokenGuard } = require('../services/Auth');

router.get('/account/me', tokenGuard, AppController.me);

router.get('/account/weather', tokenGuard, AppController.weather);

module.exports = router;