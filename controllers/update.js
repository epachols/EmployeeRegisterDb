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

  addEmp(callback) {
    connection.query("SELECT title, id FROM role", function (err, results) {
      let titleArr = [];
      if (err) throw err;
      results.forEach((thing) => {
        titleArr.push(thing.title);
      });
      inq
        .prompt([
          {
            type: "input",
            message: "employee's first name",
            name: "first_name",
          },
          {
            type: "input",
            message: "employee's last name",
            name: "last_name",
          },
          {
            type: "list",
            message: "What role will the employee fill?",
            choices: titleArr,
            name: "role",
          },
        ])
        .then(function (response) {
          //response here being all the juicy deets that came out of the previous question
          console.log(response);
          connection.query(
            "INSERT INTO employee (first_name, last_name, role_id) VALUES (?,?,?)",
            [
              response.first_name,
              response.last_name,
              titleArr.indexOf(response.role) + 1,
            ],
            function (err, res) {
              if (err) throw err;
              //TODO: use an additional inquiry here to ask which manager they want, then add search by MGR and swap MGR functions
              callback();
            }
          );
        });
    });
  } //Complete add employee function, besides adding manager info (one more nested inquiry, do after other basics are complete)

  removeEmp(callback) {
    connection.query(
      "SELECT first_name, last_name, id FROM employee",
      function (err, results) {
        let empArr = [];
        if (err) throw err;
        results.forEach((thing) => {
          empArr.push(thing.first_name + thing.last_name);
        });
        inq.prompt({
            type:"list",
            message: "\n \n Please Choose which employee will be leaving us \n \n",
            choices: empArr,
            name: "emptoDelete"
        }).then(function(response){

            connection.query("DELETE from employee WHERE id = ?",
            [empArr.indexOf(response.emptoDelete) + 1],
            function(err, results) {
                if (err) throw err;
                console.log("Line 83 of update.js", "successfully removed the former employee in question.")
                callback();
            })

        })
        //here ends the original query function
      });
  }








  removeDept() {
    console.log("you wish to consolidate departments...\n");
    // query departments, then inq.prompt list which department? THEN
    connection.query(
        "SELECT department, id FROM department",
        function (err, results) {
          let depArr = [];
          if (err) throw err;
          results.forEach((thing) => {
            depArr.push(thing.department);
          });
          inq.prompt({
              type:"list",
              message: "\n \n Please Choose which Department will be Downsized \n \n",
              choices: depArr,
              name: "deptoDelete"
          }).then(function(response){
  
              connection.query("DELETE from department WHERE id = ?",
              [depArr.indexOf(response.deptoDelete) + 1],
              function(err, results) {
                  if (err) throw err;
                  console.log("Line 122 of update.js", "successfully removed the department in question.")
                  callback();
              })
  
          })
          //here ends the original query function
        });
  }






  removeRole() {
    console.log("you wish to streamline the roles...\n");
    // inq.prompt
  }

  role() {
    console.log("you wish to change an employee's role...\n");
    // query employees,
    // then which employee?
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