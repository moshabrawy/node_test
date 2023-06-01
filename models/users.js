const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("users", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING(191),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(191),
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING(191),
        allowNull: false,
    },
    phone: {
        type: Sequelize.STRING(191),
        allowNull: false,
    },
    avatar: {
        type: Sequelize.STRING(225),
        allowNull: false,
    },
});

module.exports = User;