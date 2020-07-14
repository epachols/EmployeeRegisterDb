const inquirer = require("inquirer");
const mysql = require("mysql");
//TODO: may need to set PORT to process.env.port || 3306
//TODO: may need to set PORT to process.env.port || 3306
var connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "password",
    database: "employee_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    init();
    connection.end();
})

function init() {
    console.log("we done dinnit")
    // inq.prompt({}).then(function (err, data){})
}