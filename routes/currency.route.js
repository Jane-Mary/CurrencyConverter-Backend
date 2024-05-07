const { Router } = require('express');
const router = Router();

const currencyController = require('../controllers/currency.controller');

router.get('/', currencyController.find);

module.exports = router;