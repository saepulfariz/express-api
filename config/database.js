let mysql = require('mysql');

const DB_HOST =
    process.env.DB_HOST;
const DB_USER =
    process.env.DB_USER;
const DB_PASSWORD =
    process.env.DB_PASSWORD;
const DB_NAME =
    process.env.DB_NAME;
const DB_PORT =
    process.env.DB_PORT;
const port = (DB_PORT) ? DB_PORT : 3306;

const config = {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: port
}

let connection = mysql.createConnection(config);

connection.connect(function (error) {
    if (!!error) {
        console.log(error);
    } else {
        console.log('Connection Succuessfully!');
    }
})

module.exports = connection;