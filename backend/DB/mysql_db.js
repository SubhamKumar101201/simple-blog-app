const mysql = require('mysql')

const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "blog_app",
    port: "3308"
})


mysqlConnection.connect((err) => {
    if(err) {
        console.log('Error connecting to DB.')
        return;
    }
    console.log("MySql is connected!!");
})

module.exports = mysqlConnection