const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/profile.controller.js');

router.get("/", ProfileController.get);
router.put('/', ProfileController.update);
router.get('/:id', ProfileController.getOne);

module.exports = router;