const { Router } = require('express');
const router = Router();

const currencyController = require('../controllers/currency.controller');

router.get('/', currencyController.find);
router.get('/currencyapi', currencyController.getFromCurrencyapi);

module.exports = router;