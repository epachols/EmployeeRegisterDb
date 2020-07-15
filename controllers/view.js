const mysql = require("mysql");

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

// CAN ALSO WRITE A CONSTRUCTOR THAT WRITES THE STUFF FOR YOU!
class view {
    viewAll(){
        console.log("you picked view all...\n");
        connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.department FROM role INNER JOIN employee ON role_id = role.id INNER JOIN department ON department.id = role.department_id ORDER BY department ASC;",
         function (err, res) {
            if (err) throw err;
            console.log('\n \n');
            console.table(res);
            console.log('\n \n');
        });
    };

    //TODO:viewMgr(){
        // bring back all manager possibilities, filter for uniqueness, set as options for choice
        // "which manager" prompt, then bring ALL employees By that manager's employee Id, sorted descending salary.
    // };

    //TODO:viewDpt(){
        // set a var equal to the department names returned by query.
        // inq.prompt which department? (choices in question involve response from querying the departments)
        //then takes selected department and brings tabularized employees by selected department (salary descending) 
    // };

    // TODO:viewRoles(){
    //     // view a list of employees by role,
    //     console.log("you picked view employees by role...\n");
    // };
    
    // TODO:viewBudget(){
    // this would involve querying for departments list and asking which department again
    // then taking passed department choice and bringing tabularized data as well as sum of all the 
    // "salary" items of the employees returned by department.  NOTE **this should be done after viewdept.**
    // };
}

module.exports = new view();