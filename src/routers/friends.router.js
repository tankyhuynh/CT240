const express = require('express');
const router = express.Router();
const FriendController = require('../controllers/friend.controller.js')

router.get('/', FriendController.get)
router.get("/:id", FriendController.getOne)
router.delete('/:id', FriendController.remove)


module.exports = router;