const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/profile.controller.js');
const multerUpload = require('../middleware/multerUploadAvatar.js');

router.get("/", ProfileController.get);
router.put('/',multerUpload, ProfileController.update);
router.get('/:id', ProfileController.getOne);

module.exports = router;