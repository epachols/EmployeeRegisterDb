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

// CAN ALSO WRITE A CONSTRUCTOR THAT WRITES THE STUFF FOR YOU!
class update {
  addEmp(callback) {
    connection.query("SELECT title FROM role", function (err, results) {
        let resultArr = [];
        if (err) throw err;
        results.forEach((thing) => {
          resultArr.push(thing.title);
        });
        inq.prompt(
            [{
                type:"input",
                message: "how are you feeling, jackass evan?",
                name: "feels"
            },
            {
                type:"input",
                message: "how are you feeling, jackass evan?",
                name: "feel"
            }]
        ).then(function(response) {
            console.log(response);
            callback();
        })
        
        
      });
    //inserting paste from update above
  }

  removeEmp() {
    console.log("you wish to condense the team...\n");
    // inq.prompt
  }
  removeDept() {
    console.log("you wish to consolidate departments...\n");
    // inq.prompt
  }
  removeRole() {
    console.log("you wish to streamline the roles...\n");
    // inq.prompt
  }

  role() {
    console.log("you wish to change an employee's role...\n");
    // inq.prompt
  }

  manager() {
    console.log("you wish to change an employee's manager...\n");
    // inq.prompt
  }
}

module.exports = new update();



// inquirer-connection link script 

// inq.prompt().then(connection.query("", function(err, res){}))

// SHOULD separate further to role.js, department.js, employee.js