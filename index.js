const inq = require("inquirer");
const emp = require("./controllers/employee");
const department = require("./controllers/department");
const role = require("./controllers/role");
const connection = require("./controllers/connection");

function init() {
  //ascii art for welcome mat
    console.log(`\n ____  __  __  ____  __    _____  _  _  ____  ____ \n( ___)(  \\/  )(  _ \\(  )  (  _  )( \\/ )( ___)( ___)\n )__)  )    (  )___/ )(__  )(_)(  \\  /  )__)  )__) \n(____)(_/\\/\\_)(__)  (____)(_____) (__) (____)(____)\n __  __    __    _  _    __    ___  ____  ____ \n(  \\/  )  /__\\  ( \\( )  /__\\  / __)( ___)(  _ ) \n )    (  /(__)\\  )  (  /(__)\\( (_-. )__)  )  / \n(_/\\/\\_)(__)(__)(_)\\_)(__)(__)\\___/(____)(_)\\_) \n`)
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
          raven();
        connection.end();
    }
      });
      // return 
}

init();