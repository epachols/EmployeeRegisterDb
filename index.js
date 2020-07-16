const inq = require("inquirer");
const mysql = require("mysql");
// const view = require("./controllers/view");
// const update = require("./controllers/update");
const emp = require("./controllers/employee");
const department = require("./controllers/department");
const role = require("./controllers/role");

//TODO: add validation for NO SPACES to all text input for split reasons
//TODO: add validation for ingteger value salaries to all text input for split reasons

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
    console.log("connected as id " + connection.threadId);
    console.log("please take the time to expand your window and make sure your command line prompt has at least 150 character spaces.")
    init();
})

function init() {
    console.log("\n \n")
    inq
      .prompt({
        type: "list",
        message: "What would you like to do next?",
        choices: [
            
            // TODO:"view all employees by manager",
            // TODO:"update employee manager",
            // TODO:assigning a manager to employees,
            // TODO:"view department budgets",
            
            //employee functions
          "view all employees", 
          "add an employee", 
          "update employee role",
          "remove an employee", 
          // department functions
          "view all departments", 
          "add a department", 
          "remove a department", 
          //role functions
          "view all roles", 
          "add a role", 
          "remove a role", 
          "Quit", 
        ],
        name: "firstchoice",
      })
      .then(function (response) {
    

        //FOR DEALING WITH EMPLOYEES from the EMPLOYEE controller
        if (response.firstchoice === "view all employees") {
          emp.viewAll(() => {
            init()
          });
        }
        if (response.firstchoice === "add an employee") {
          emp.addEmp(() => init());
        }

        if (response.firstchoice === "remove an employee") {
          emp.removeEmp(()=>init());
        }
        if (response.firstchoice === "update employee role") {
            emp.updateRole(()=>init());
          }
      

        //FOR DEALING WITH departments from the DEPARTMENT controller
        if (response.firstchoice === "view all departments") {
            console.log("you picked view all departments");
            department.viewDpts(()=>init());
          }

        if (response.firstchoice === "remove a department") {
          department.removeDept(()=>init());
        }

        if (response.firstchoice === "add a department") {
          department.addDept(()=>init());
        }



        //FOR DEALING WITH ROLES from the ROLE controller
        if (response.firstchoice === "view all roles") {
            role.viewRoles(()=>init());
        }

        if (response.firstchoice === "add a role") {
        role.addRole(()=>init());
        }

        if (response.firstchoice === "remove a role") {
          role.removeRole(() => init());
        }
        
       

        if (response.firstchoice === "Quit") {
          console.log(
            "Thank you for choosing CodeCrow Services courtesy of https://github.com/epachols"
          );
          console.log("\n ... \n ..... \n ... ");
          const raven = require("./assets/slycrow");
        return connection.end();
    }
      });
}

// init();