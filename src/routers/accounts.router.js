const express = require('express');
const router = express.Router();
const AccountController = require('../controllers/account.controller');

router.put('/', AccountController.update);
module.exports = router;