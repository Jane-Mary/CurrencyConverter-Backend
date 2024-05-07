const { Router } = require('express');
const router = Router();

const conversionController = require('../controllers/conversion.controller')

router.post('/', conversionController.convert );
router.get('/', conversionController.getAll );

module.exports = router;