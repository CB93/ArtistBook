const express = require('express');
const router = express.Router();
const artistController = require("../controller/artistController")
const loginController = require("../controller/loginController")

// Login routes
router.get("/", loginController.index)
router.post("/login", loginController.login)

// Artist routes
router.get("/artist", artistController.artist)
router.post("/add", artistController.upload)
router.post("/delete/:id", artistController.delete)

module.exports = router;