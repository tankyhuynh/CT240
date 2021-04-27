const express = require('express');
const router = express.Router();
const RoomController = require('../controllers/room.controller');

router.get("/", RoomController.get);
router.post("/", RoomController.create);
router.get("/:id", RoomController.getOne);
router.put("/:id", RoomController.updateOne);
router.delete("/:id",RoomController.removeOne);
router.get("/:id/members", RoomController.getMembers);
router.post("/:id/members", RoomController.addMember);
router.put("/:id/members/:member", RoomController.settingMember);
router.delete("/:id/members/:member", RoomController.removeMember);
router.get("/:id/messages", RoomController.getMessage);

module.exports = router;