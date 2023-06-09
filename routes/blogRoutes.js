const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

router.route('/get_all_blogs').get(blogController.getAllBlogs);

module.exports = router;
