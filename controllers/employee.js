const inq = require("inquirer");
const connection = require("./connection")

class emp {
  viewAll(callback) {
    console.log("you picked view all...\n");
    connection.query(
      "SELECT employee.first_name, employee.last_name, role.title, role.salary, department.department FROM role INNER JOIN employee ON role_id = role.id INNER JOIN department ON department.id = role.department_id ORDER BY department ASC;",
      function (err, res) {
        if (err) throw err;
        console.log("\n \n");
        console.table(res);
        console.log("\n \n");
        callback();
      }
    );
  } //WORKS

  addEmp(callback) {
    console.log("\n~~~~~~~~~~~~~~~~Add An Employee~~~~~~~~~~~~~~~~~~~~\n")
    connection.query("SELECT title, id FROM role ORDER BY id ASC;",
     function (err,results) {
      let roleArr = [];
      let idArr = [];
      if (err) throw err;
      results.forEach((thing) => {
        roleArr.push(thing.title);
        idArr.push(thing.id);
      });
      inq
        .prompt([
          {
            type: "input",
            message: "employee's first name",
            name: "first_name",
          },
          {
            type: "input",
            message: "employee's last name",
            name: "last_name",
          },
          {
            type: "list",
            message: "What role will the employee fill?",
            choices: roleArr,
            name: "role",
          },
        ])
        .then(function (response) {
          console.log("\n Adding new Employee to Database... \n");
          console.log(response.first_name);
          console.log(response.last_name);
          console.log(response.role);
          let roleIdToAdd = idArr[roleArr.indexOf(response.role)];
          //   response here being all the juicy deets that came out of the previous question
          connection.query(
            "INSERT INTO employee (first_name, last_name, role_id) VALUES (?,?,?)",
            [response.first_name, response.last_name, roleIdToAdd],
            function (err, res) {
              if (err) throw err;
              callback();
            }
          );
        });
    });
  } //WORKS

  removeEmp(callback) {
    console.log("\n~~~~~~~~~~~~~~~~Remove An Employee~~~~~~~~~~~~~~~~~~~~\n")
    connection.query(
      "SELECT first_name, last_name, id FROM employee ORDER BY id ASC;",
      function (err, results) {
        let empArr = [];
        let idArr = [];
        if (err) throw err;
        results.forEach((result) => {
          empArr.push(`${result.first_name} ${result.last_name}`);
          idArr.push(`${result.id}`);
        });
        inq
          .prompt({
            type: "list",
            message:
              "\n \n Please Choose which employee will be leaving us \n \n",
            choices: empArr,
            name: "emptoDelete",
          })
          .then(function (response) {
            let indexToDelete = [empArr.indexOf(response.emptoDelete)];

            connection.query(
              "DELETE from employee WHERE id = ?",
              [idArr[indexToDelete]],
              function (err, results) {
                if (err) throw err;
                // console.log(`successfully removed the former employee in question. Buhbye! Thanks for all your hard work, ${deletedEmp}`)
                callback();
              }
            );
          });
        // here ends the original query function
      }
    );
  } //WORKS
  
  updateRole(callback) {
    console.log("\n~~~~~~~~~~Let's update an employee Role...~~~~~~~~~~~\n")
    connection.query(
      "SELECT employee.first_name, employee.last_name, employee.id, role_id, title, role.salary, department.department FROM role INNER JOIN employee ON role_id = role.id INNER JOIN department ON department.id = role.department_id ORDER BY id ASC;",
      function (err, results) {
        if (err) throw err;
        console.log("\n \n");
        // console.table(results);
        // console.log("\n \n");
        let empArr = [];
        let empIdArr = [];
        let roleIdArr = [];
        let roleArr = [];
        if (err) throw err;
        results.forEach((thing) => {
          empArr.push(`${thing.first_name} ${thing.last_name}`);
          empIdArr.push(thing.id)
          roleIdArr.push(thing.role_id);
          roleArr.push(thing.title);
        });
        //BEGINNING THE INQUIRER PROMPT INSIDE THE FIRST CONNECTION QUERY
        inq.prompt([
          {
            type: "list",
            message: "Which Employee do you want to update the role for?",
            choices: empArr,
            name: "empToUpdate"
          },
          {
            type: "list",
            message: "Which do you want their new role to be?",
            choices: roleArr,
            name: "roleToUpdate"
          },
      
          ]).then(function (response){
            //problem is in roleID picked
            let rolePicked = response.roleToUpdate
            let roleIdPicked = roleIdArr[roleArr.indexOf(rolePicked)]
            let empIdPicked = empIdArr[empArr.indexOf(response.empToUpdate)]
            console.log("roleIdPicked", roleIdPicked)
            console.log("empidpicked", empIdPicked)

            

            // BEGINNING THE UPDATE QUERY INSIDE THE INQUIRER PROMPT
            connection.query("UPDATE employee SET role_id = ? WHERE id = ?",
             [roleIdPicked, empIdPicked], 
             function(err,res){
              if (err) throw err;
              console.log(`\n We have successfully switched your employee's role.`)
               callback();
             })
          })
      
      })


    
  }
}

//TODO:viewMgr(){     
    // };

// TODO: manager() {}


module.exports = new emp();