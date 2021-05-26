const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/user.controller');

router.post("/login", UsersController.login);
router.post("/register", UsersController.register);
router.delete("/logout", UsersController.logout);

module.exports = router;