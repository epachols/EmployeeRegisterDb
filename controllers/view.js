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
    viewAll(callback){
        console.log("you picked view all...\n");
        connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.department FROM role INNER JOIN employee ON role_id = role.id INNER JOIN department ON department.id = role.department_id ORDER BY department ASC;",
         function (err, res) {
            if (err) throw err;
            console.log('\n \n');
            console.table(res);
            console.log('\n \n');
            callback();
        });
    };

    //TODO:viewMgr(){
       
    // };

    viewDpts(callback){
        console.log("\n \n you picked view all departments...\n");
        connection.query("SELECT department, id FROM department ORDER BY id ASC;",
         function (err, res) {
            if (err) throw err;
            console.log('\n \n');
            console.table(res);
            console.log('\n \n');
            callback();
        });
    };

    viewRoles(callback){
        console.log("you picked view employees by role...\n");
        connection.query("SELECT title, salary, id FROM role ORDER BY id ASC;",
         function (err, res) {
             if (err) throw err;
            console.log('\n \n');
            console.table(res);
            console.log('\n \n');
            callback();
        });
    };
    
    // TODO:viewBudget(){
    // this would involve asking which department
    //then querying for an inner join of employee, department, and role, bringing back......
    // then taking passed department choice and bringing tabularized data as well as sum of all the 
    // "salary" items of the employees returned by department.  NOTE **this should be done after viewdept.**
    // };
}

module.exports = new view();