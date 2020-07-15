const inq = require("inquirer");
const mysql = require("mysql");
const view = require("./controllers/view")
const update = require("./controllers/update")


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
    // connection.end();
})

function init() {
    // could consider calling the view all employees right here as a console.table()
    inq
    .prompt({
        type:"list",
        message:"What would you like to do next?",
        choices: [
            "view all employees", 
            "view all employees by department",
            "view all employees by manager",
            "view all employees by role",
            "view department budgets",
            "add an employee",
            "update employee role", 
            "update employee manager",
            "remove an employee", 
            "remove a department",
            "remove a role",
             "Quit" ],
        name: "firstchoice"
    })
    .then(function (response){
            if (response.firstchoice === "view all employees") {
                view.viewAll();
                init();
            }
            if (response.firstchoice === "view all employees by department") {
                console.log("you picked view all by dept");
                // view.viewDpt();
                // init();
            }
            if (response.firstchoice === "view all employees by manager") {
                console.log("you picked view all by manager");
                // view.viewMgr();
                // init();
            }
            if (response.firstchoice === "view all employees by role") {
                console.log("you want to look at all the roles");
                // view.viewRoles();
                // init();
            }
            if (response.firstchoice === "view department budgets") {
                console.log("you want to look at the department salary budgets");
                // view.viewBudgets();
                // init();
            }
            if (response.firstchoice === "add an employee") {
                update.addEmp(function(){
                    init();
                });
            }

            if (response.firstchoice === "remove an employee") {
              // update.removeEmp();
              // init();
            }
            if (response.firstchoice === "remove a department") {
              // update.removeDept();
              // init();
            }
            if (response.firstchoice === "remove a role") {
              // update.removeRole();
              // init();
            }
            if (response.firstchoice === "update employee role") {
              // update.role();
              // init();
            }
            if (response.firstchoice === "update employee manager") {
              // update.manager();
              // init();
            }
            if (response.firstchoice === "Quit") {
                console.log("Thank you for choosing CodeCrow Services courtesy of https://github.com/epachols")
                connection.end();
                //secretBird( involves await or setinterval.);
            }
    })
}

// init();