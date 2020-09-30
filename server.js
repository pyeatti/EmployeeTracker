const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "",
  database: "employeeCMS_DB",
});

connection.connect(function (err) {
  if (err) throw err;
  runSearch();
});

async function runSearch() {
  let answer = inquirer
    .prompt([
      {
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View Employees",
          "Add Employee",
          "Add Department",
          "View Departments",
          "Add Role",
          "View Roles",
          "EXIT",
        ],
      },
    ])
    .then(function (answer) {
      switch (answer.action) {
        case "View Employees":
          viewEmployees();

          break;

        case "Add Employee":
          addEmployee();

          break;
        case "Add Department":
          addDepartment();

          break;
        case "View Departments":
          viewDepartment();

          break;
        case "Add Role":
          addRole();

          break;
        case "View Roles":
          viewRole();

          break;
        case "EXIT":
          connection.end();
          break;

        default:
          break;
      }
    });
}

function viewEmployees() {
  connection.query("SELECT * FROM Employees", function (err, res) {
    if (err) throw err;
    console.table(res);
    connection.end();
  });
}
function addEmployee() {
  let questions = [
    {
      name: "first_name",
      type: "input",
      message: "What is the first name of the New Employee?",
    },
    {
      name: "last_name",
      type: "input",
      message: "What is the last name of the New Employee?",
    },
    {
      name: "manager_id",
      type: "input",
      message: "What is your ID?",
    },
    {
      name: "role_id",
      type: "input",
      message: "Please assign an ID number for your new Employee?",
    },
  ];

  inquirer.prompt(questions).then((answer) => {
    let query = `insert into Employees (first_name,last_name,manager_id,role_id) values(?,?,?,?)`;

    connection.query(
      query,
      [answer.first_name, answer.last_name, answer.manager_id, answer.role_id],
      function (err) {
        if (err) throw err;
        connection.end();
      }
    );
  });
}

function addDepartment() {
  inquirer
    .prompt({
      name: "Department",
      type: "input",
      message: "What is the name of the New Department?",
    })
    .then(function (answer) {
      let query = `insert into Departments (department_name) values(?) `;
      connection.query(query, answer.Department, function (err) {
        if (err) throw err;
        connection.end();
      });
    });
}

function viewDepartment() {
  connection.query("SELECT * FROM Departments", function (err, res) {
    if (err) throw err;
    console.table(res);
    connection.end();
  });
}

function addRole() {
  let questions = [
    {
      name: "title",
      type: "input",
      message: "What is the Title of the Role?",
    },
    {
      name: "salary",
      type: "input",
      message: "What is the Salary of this Role?",
    },
  ];
  inquirer.prompt(questions).then((answer) => {
    let query = `insert into employee_role (title, salary) values(?,?)`;
    connection.query(query, [answer.title, answer.salary]);
    connection.end();
  });
}

function viewRole() {
  connection.query("SELECT * FROM employee_role", function (err, res) {
    if (err) throw err;
    console.table(res);
    connection.end();
  });
}
