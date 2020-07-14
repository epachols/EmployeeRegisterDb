const inq = require("inquirer");
const mysql = require("mysql");
const view = require("./assets/view")

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
    connection.end();
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
            "view all roles",
            "view department budgets",
            "add an employee",
            "remove an employee", 
            "update employee role", 
            "update employee manager",
             "Quit" ],
        name: "firstchoice"
    })
    .then(function (response){
            if (response.firstchoice === "view all employees") {
                console.log("you picked view all");
                // view.viewAll();
                // init();
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
            if (response.firstchoice === "view all roles") {
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
                console.log("you want to add");
                // update.add();
                // init();
            }
            if (response.firstchoice === "remove an employee") {
                console.log("you want to remove");
              // update.remove();
              // init();
            }
            if (response.firstchoice === "update employee role") {
                console.log("you want to update an employee role");
              // update.role();
              // init();
            }
            if (response.firstchoice === "update employee manager") {
                console.log("you want to update an employee manager");
              // update.manager();
              // init();
            }
            if (response.firstchoice === "Quit") {
                console.log("Thank you for choosing CodeCrow Services courtesy of https://github.com/epachols!")
                //secretBird( involves await or setinterval.);
            }
    })
}
