const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: process.env.PORT || 3306,
    // Your username
    user: "root",
    // Your password
    password: "password",
    database: "employee_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("\n \n");
    console.log("please take the time to expand your window, \n make sure your command line prompt has at least 150 character spaces.")
})

module.exports = connection