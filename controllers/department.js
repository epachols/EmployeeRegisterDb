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

class department {
  addDept(callback) {
    console.log("So you want to add a department... \n");
    inq
      .prompt([
        {
          type: "input",
          message: "department to add",
          name: "deptToAdd",
        },
      ])
      .then(function ({ deptToAdd }) {
        console.log(deptToAdd);
        connection.query(
          "INSERT INTO department (department) VALUES (?)",
          [deptToAdd],
          function (err, res) {
            if (err) throw err;
            console.log("\n \n Successfully created new department. \n \n");
            callback();
          }
        );
      });
  }

  removeDept(callback) {
    console.log("you wish to consolidate departments...\n");
    // query departments, then inq.prompt list which department? THEN
    connection.query(
      "SELECT department, id FROM department ORDER BY id",
      function (err, results) {
        let depArr = [];
        let idArr = [];
        if (err) throw err;
        results.forEach((thing) => {
          depArr.push(thing.department);
          idArr.push(thing.id);
        });
        inq
          .prompt({
            type: "list",
            message:
              "\n \n Please Choose which Department will be Downsized \n \n",
            choices: depArr,
            name: "deptoDelete",
          })
          .then(function (response) {
            let indexToDelete = [depArr.indexOf(response.deptoDelete)];
            connection.query(
              "DELETE from department WHERE id = ?",
              [idArr[indexToDelete]],
              function (err, results) {
                if (err) throw err;
                console.log(
                  `successfully removed the department, Goodbye ${response.deptoDelete} ! \n`
                );
                callback();
              }
            );
          });
      }
    );
  }

  viewDpts(callback) {
    console.log("\n \n you picked view all departments...\n");
    connection.query(
      "SELECT department, id FROM department ORDER BY id ASC;",
      function (err, res) {
        if (err) throw err;
        console.log("\n \n");
        console.table(res);
        console.log("\n \n");
        callback();
      }
    );
  }

  // TODO:viewBudget(){
  // this would involve asking which department
  //then querying for an inner join of employee, department, and role, bringing back......
  // then taking passed department choice and bringing tabularized data as well as sum of all the
  // "salary" items of the employees returned by department.  NOTE **this should be done after viewdept.**
  // };
}

module.exports = new department()