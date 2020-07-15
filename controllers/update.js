const mysql = require("mysql");
const inquirer = require("inquirer");

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

// CAN ALSO WRITE A CONSTRUCTOR THAT WRITES THE STUFF FOR YOU!
class update {
  
    addEmp(){
        console.log("you wish to grow the team...\n");
        // inquirer.prompt
    };

    removeEmp(){
        console.log("you wish to condense the team...\n");
        // inquirer.prompt
    };
    removeDept(){
        console.log("you wish to consolidate departments...\n");
        // inquirer.prompt
    };
    removeRole(){
        console.log("you wish to streamline the roles...\n");
        // inquirer.prompt
    };
    
    role(){
        console.log("you wish to change an employee's role...\n");
        // inquirer.prompt
    };

    manager(){
        console.log("you wish to change an employee's manager...\n");
        // inquirer.prompt
    };
}

module.exports = new update();