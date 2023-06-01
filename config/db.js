const Sequelize = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(
    /* DB_NAME, DB_USERNAME, DB_PASSWORD, {}*/
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        dialect: process.env.DB_CONNECTION,
        host: process.env.DB_HOST,
    }
);
module.exports = sequelize;


