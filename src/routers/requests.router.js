const express = require('express');
const router = express.Router();

const RequestController = require("../controllers/request.controller.js");

router.get("/", RequestController.get);
router.post("/", RequestController.create);
router.get("/:id", RequestController.getOne);
router.put("/:id", RequestController.reply);
router.delete("/:id", RequestController.remove);

module.exports = router;