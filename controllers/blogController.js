const blog = require("../models/blogs");

exports.getAllBlogs = (request, response, next) => {
    blog.findAll().then((blogs) => {
        response.status(200).json({ status_code: 200, blogs: blogs })
    }).catch((error) => {
        response.status(400).json({ status_code: 400, error: error })
    });
}