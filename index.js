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
    // console.log("we done dinnit")
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
        // console.log("PUT THE SWITCH CASE HERE, USE FROM PREV EXERCISE")
            if (response.firstchoice === "view all employees") {
                console.log("you picked view all");
                // view.viewAll();
            }
            if (response.firstchoice === "view all employees by department") {
                console.log("you picked view all by dept");
                // view.viewDpt();
            }
            if (response.firstchoice === "view all employees by manager") {
                console.log("you picked view all by manager");
                // view.viewMgr();
            }
            if (response.firstchoice === "view all roles") {
                console.log("you want to look at all the roles");
                // view.viewRoles();
            }
            if (response.firstchoice === "view department budgets") {
                console.log("you want to look at the department salary budgets");
                // view.viewBudgets();
            }
            if (response.firstchoice === "add an employee") {
                console.log("you want to add");
                // codeblock
            }
            if (response.firstchoice === "remove an employee") {
                console.log("you want to remove");
              // codeblock
            }
            if (response.firstchoice === "update employee role") {
                console.log("you want to update an employee role");
              // codeblock
            }
            if (response.firstchoice === "update employee manager") {
                console.log("you want to update an employee manager");
              // codeblock
            }
            if (response.firstchoice === "Quit") {
                console.log("buhbye!")
            }
    })
}
