const { Router } = require('express');
const router = Router();

const userController = require('../controllers/user.controller');

router.get('/', userController.getAll);
router.post('/login', userController.login);
router.post('/register', userController.register);

module.exports = router;