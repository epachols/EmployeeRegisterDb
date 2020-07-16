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

class role {
  addRole(callback) {
    console.log("So you want to add a role... \n");
    connection.query(
      "SELECT title, salary, department, role.id, department_id FROM role INNER JOIN department ON department.id = department_id ORDER BY department.id ASC;",
      function (err, res) {
        if (err) throw err;
        let depArry = [];
        let idArry = [];
        res.forEach(role => {
            if (!depArry.includes(role.department)) {
                depArry.push(role.department)
                idArry.push(role.department_id)
            }
        } )
        inq
          .prompt([
            {
              type: "input",
              message:"Which role would you like to add?",
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
              choices: depArry,
              name: "deptAssignment"
            },
          ])
          .then(function (response) {
            let chosenDepId = idArry[depArry.indexOf(response.deptAssignment)]
            connection.query("INSERT INTO role (title, salary, department_id) VALUES (?,?,?)",
             [response.title, response.salary, chosenDepId ],
              function (err, res) {
                if (err) throw err;
                console.log("Ok, We've add that role to your EmployeeRegisterDb")
                callback(); 
            })
          });
      }
    );
  }

  removeRole(callback) {
    console.log("you wish to streamline the roles...\n");
    // query departments, then inq.prompt list which department? THEN
    connection.query("SELECT title, id FROM role ORDER BY id", function (
      err,
      results
    ) {
      let roleArr = [];
      let idArr = [];
      if (err) throw err;
      results.forEach((thing) => {
        roleArr.push(thing.title);
        idArr.push(thing.id);
      });
      inq
        .prompt({
          type: "list",
          message: "\n \n Please Choose which Role will be Deleted \n \n",
          choices: roleArr,
          name: "roletoDelete",
        })
        .then(function (response) {
          let indexToDelete = [roleArr.indexOf(response.roletoDelete)];
          connection.query(
            "DELETE FROM role WHERE id = ?",
            [idArr[indexToDelete]],
            function (err, results) {
              if (err) throw err;
              console.log(
                `successfully removed role, Goodbye ${response.deptoDelete} ! \n`
              );
              callback();
            }
          );
        });
    });
  }

  viewRoles(callback) {
    console.log("you picked all Roles...\n \n");
    connection.query(
      "SELECT title, salary, department FROM role INNER JOIN department ON department.id = department_id ORDER BY department.id ASC;",
      function (err, res) {
        if (err) throw err;
        console.log("\n \n");
        console.table(res);
        console.log("\n \n");
        callback();
      }
    );
  } 
}



module.exports = new role();