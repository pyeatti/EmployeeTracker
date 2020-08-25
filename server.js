const inquirer = require("inquirer");
const mysql = require("mysql");

inquirer.prompt({
  name: "choice",
  message: "What would you like to do?",
  choices: [
    "Add Employee",
    "Add Role",
    "Add Department",
    "View All Employees",
    "View All Employees by Department",
    "Update Employee Role",
    "Exit",
  ],
  type: "list",
});
ç