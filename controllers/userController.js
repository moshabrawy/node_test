const user = require("../models/users");

exports.getAllUsers = (request, response, next) => {
    user.findAll({
        attributes: [
            'id',
            'name',
            'email',
            'password',
            'phone',
            'avatar'
        ]
    })
        .then((users) => {
            response.status(200).json({ status_code: 200, users: users })
        })
        .catch((error) => {
            res.status(400).json({
                status_code: 400,
                error,
            });
        });
};