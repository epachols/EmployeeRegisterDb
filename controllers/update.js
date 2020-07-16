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
        connection.query(
          "SELECT title, salary, department, role.id, department_id FROM role INNER JOIN department ON department.id = department_id ORDER BY department.id ASC;",
          function (err, res) {
            if (err) throw err;
            let depArry = [];
            let idArry = [];
            res.forEach(role => {
                depArry.push(role.department)
                idArry.push(role.department_id)
            } )
            depArry.
            inq
              .prompt([
                {
                  type: "input",
                  message: "Which role would you like to add?",
                  name: "title",
                },
                {
                  type: "number",
                  message: "What will their salary be?",
                  name: "salary",
                },
                {
                  type: "list",
                  message: "would you like to assign them a department?",
                  choices: ["No", ...depArry],
                  name: "deptAssignment"
                },
              ])
              .then(function (response) {
                console.log(response);
    
                callback(); //TODO: put me inside your last nested function!
              });
          }
        );
      }





}

module.exports = new update();



// inquirer-connection link script 

// inq.prompt().then(connection.query("", function(err, res){}))

// SHOULD separate further to role.js, department.js, employee.js