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


    viewRoles(callback){
        console.log("you picked all Roles...\n \n");
        connection.query("SELECT title, salary, department FROM role INNER JOIN department ON department.id = department_id ORDER BY department.id ASC;",
         function (err, res) {
             if (err) throw err;
            console.log('\n \n');
            console.table(res);
            console.log('\n \n');
            callback();
        });
    }; //WORKS
    
    // TODO:viewBudget(){
    // this would involve asking which department
    //then querying for an inner join of employee, department, and role, bringing back......
    // then taking passed department choice and bringing tabularized data as well as sum of all the 
    // "salary" items of the employees returned by department.  NOTE **this should be done after viewdept.**
    // };
}

module.exports = new view();