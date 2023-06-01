const Sequelize = require("sequelize"); // For model attributes
const sql_connection = require("../config/db"); // For connection

const Blog = sql_connection.define("blogs", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING(191),
        allowNull: false
    },
    image: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    tags: {
        type: Sequelize.STRING(191),
        allowNull: false
    },
    desc: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = Blog;