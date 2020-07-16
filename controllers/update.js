const mysql = require("mysql");
const inq = require("inquirer");

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


class update {
 
//TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:
//REMEMBER YOU"RE WORKING IN THE OLD UPDATE FILE FOR SAFETY
// TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:TODO:

    addRole(callback) {
        console.log("So you want to add a role... \n");
        
                callback(); //TODO: put me inside your last nested function!
            
          
    
      }





}

module.exports = new update();



// inquirer-connection link script 

// inq.prompt().then(connection.query("", function(err, res){}))

// SHOULD separate further to role.js, department.js, employee.js