const inq = require("inquirer");
const mysql = require("mysql");
const view = require("./controllers/view")
const update = require("./controllers/update")

//TODO: CHECK IF I NEED TO HAVE EXPRESS? IF SO, ADD IN EXPRESS BOILERPLATE


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
          "view all employees", //WORKS

          // TODO:"view all employees by manager",
          // TODO:"view department budgets",

          "add an employee", //WORKS

          "update employee manager",

          "remove an employee",
          "view all departments", //WORKS except not calling function again?
          "add a department", //WORKS
          "remove a department", //WORKS
          "view all roles", //WORKS
          "add a role",
          "remove a role",
          "update employee role",
          "Quit",
        ],
        name: "firstchoice",
      })
      .then(function (response) {
        if (response.firstchoice === "view all employees") {
          view.viewAll(()=>init());
        }
        if (response.firstchoice === "view all departments") {
            console.log("you picked view all departments");
            view.viewDpts
        }
        if (response.firstchoice === "view all departments") {
          console.log("you picked view all departments");
          view.viewDpts(()=>init());
        }

        // if (response.firstchoice === "view all employees by manager") {
        //     console.log("you picked view all by manager");
        //     // TODO:view.viewMgr();
        //     // init();
        // }
        // if (response.firstchoice === "view department budgets") {
        //     console.log("you want to look at the department salary budgets");
        //     // TODO:view.viewBudgets();
        //     // init();
        // }

        if (response.firstchoice === "view all roles") {
          console.log("you want to look at all the roles");
          view.viewRoles();
          init();
        }
        if (response.firstchoice === "add an employee") {
          update.addEmp(function () {
            init();
          });
        }

        if (response.firstchoice === "remove an employee") {
          update.removeEmp(()=>init());
        }
        if (response.firstchoice === "remove a department") {
          update.removeDept(()=>init());
        }
        if (response.firstchoice === "add a department") {
          update.addDept(()=>init());
        }
        if (response.firstchoice === "remove a role") {
          // TODO:update.removeRole();
          // init();
        }
        if (response.firstchoice === "add a role") {
          // TODO:update.addRole();
          // init();
        }
        if (response.firstchoice === "update employee role") {
          // TODO:update.updateRole();
          // init();
        }
        if (response.firstchoice === "update employee manager") {
          // TODO:update.manager();
          // init();
        }
        if (response.firstchoice === "Quit") {
          console.log(
            "Thank you for choosing CodeCrow Services courtesy of https://github.com/epachols"
          );
          connection.end();
          console.log("\n ... \n ..... \n ... ");
          require("./assets/slycrow");
        }
      });
}

// init();