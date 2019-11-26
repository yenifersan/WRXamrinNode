var mysql = require ('mysql');

var conn = mysql.createConnection ({
    host: 'localhost',
    user:'root',
    password: '',
    database: 'shopXamarin'
});
conn.connect();
module.exports = conn;
