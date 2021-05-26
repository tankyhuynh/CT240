const express = require('express');
const router = express.Router();

const ImageController = require('../controllers/image.controller');


router.post("/",ImageController.upload);

module.exports = router;
