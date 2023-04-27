require('dotenv').config()

const allowedOrigins = [
    process.env.MY_APP_ORIGIN || 'http://localhost:3000'
];
module.exports = allowedOrigins;
