const inq = require("inquirer");
const mysql = require("mysql");
// const view = require("./controllers/view")
// const update = require("./controllers/update");
const inquirer = require("inquirer");

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

function init() {
    // could consider calling the view all employees right here as a console.table()
    inq
    .prompt({
        type:"list",
        message:"What would you like to do next?",
        choices: [
            "view all employees", 
            "add an employee",
             "Quit" ],
        name: "firstchoice"
    })
    .then(function (response){
            if (response.firstchoice === "view all employees") {
                // view.viewAll();
                // init();
            }
            // if (response.firstchoice === "view all employees by department") {
            //     console.log("you picked view all by dept");
            //     // view.viewDpt();
            //     // init();
            // // }
            // if (response.firstchoice === "view all employees by manager") {
            //     console.log("you picked view all by manager");
            //     // view.viewMgr();
            //     // init();
            // }
            // if (response.firstchoice === "view all employees by role") {
            //     console.log("you want to look at all the roles");
            //     // view.viewRoles();
            //     // init();
            // // }
            // if (response.firstchoice === "view department budgets") {
            //     console.log("you want to look at the department salary budgets");
            //     // view.viewBudgets();
            //     // init();
            // }
            if (response.firstchoice === "add an employee") {
                connection.query("SELECT title FROM role", function (err, results) {
                    let resultArr = [];
                    if (err) throw err;
                    results.forEach((thing) => {
                      resultArr.push(thing.title);
                    });
                    inquirer.prompt(
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
                    })
                    
                    
                  });
                //inserting paste from update above
            }
            // if (response.firstchoice === "remove an employee") {
            //   // update.removeEmp();
            //   // init();
            // }
            // if (response.firstchoice === "remove a department") {
            //   // update.removeDept();
            //   // init();
            // // }
            // if (response.firstchoice === "remove a role") {
            //   // update.removeRole();
            //   // init();
            // }
            // if (response.firstchoice === "update employee role") {
            //   // update.role();
            //   // init();
            // }
            // if (response.firstchoice === "update employee manager") {
            //   // update.manager();
            //   // init();
            // }
            if (response.firstchoice === "Quit") {
                console.log("Thank you for choosing CodeCrow Services courtesy of https://github.com/epachols")
                connection.end();
                //secretBird( involves await or setinterval.);
            }
    })
}
init();