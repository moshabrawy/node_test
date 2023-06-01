const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.route('/get_all_users').get(userController.getAllUsers);

module.exports = router;
