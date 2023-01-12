const mysql = require('mysql');
const inquirer = require('inquirer');
const { update } = require('../13 homework/E-commerce-Back-End/Develop/models/Product');
require('console.table')
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Gocards6875!',
        database: 'employee_db',
        port: 3306
    }
);
db.connect(() => {
    showMenu()
})
// questions to ask the user
const questions = [{
    type: 'list',
    name: 'options',
    message: 'Please choose  .',
    choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add Employee', 'Add a Department', 'Add a Role', `Update an Employee Role`],
}];

function addDepartment() {
    inquirer.prompt([{
        type: "input",
        message: "What is the name of the department?",
        name: "department_name"
    }])
        .then(response => {
            db.query("insert into department (name) values (?)", [response.department_name], (err) => {
                viewDepartment()
            })
        })
}

function addEmployee() {
    inquirer.prompt([
        {type: "input",
        message: "Add Employee",
        name: "employee_name"
        },
        {
            type: 'input',
            name: 'firstName',
            message: "What is the new employee's first name?"
        },
        {
            type: 'input',
            name: 'lastName',
            message: "What is the new employee's last name?"
        },
        {
            type: 'input',
            name: 'salary',
            message: "What is the new employee's salary?",
        },
        {
            type: 'number',
            name: 'manager_id',
            message: "What is the employee's manager id?",
        },
        {
            type: 'number',
            name: 'role_id',
            message: "What is the new employee's role id?",
        }
    ])
 
    .then(response => {
        console.log(response)
        db.query("insert into employee (firstName, lastName, salary, manager_id, role_id) values (?,?,?,?,?)", [response.firstName, response.lastName, response.salary, response.manager_id, response.role_id], (err) => {       
        viewEmployee()})
    })
}
function addRole() {
    inquirer.prompt([{
        type: "input",
        message: "Add a new role",
        name: "roleName"
    }, {
        type: "number",
        message: "What is the id?",
        name: "id"
    }, {
        type: "input",
        message: "What is the title?",
        name: "title"
    }, {
        type: "number",
        message: "What is the salary?",
        name: "salary"
    }, {
        type: "number",
        message: "What is the department id?",
        name: "department_id"
    }])
    .then(response => {
        db.query("insert into role (id,title,salary,department_id) values (?,?,?,?)", [response.id, response.title,response.salary, response.department_id], (err) => {
            viewRoles()
        })
    })
}
function updateRole() {
    inquirer.prompt([{
        type: "input",
        message: "Update an Employee Role",
        name: "roleName"
    }, {
        type: "number",
        message: "What is the id?",
        name: "id"
    }, {
        type: "input",
        message: "What is the title?",
        name: "title"
    }, {
        type: "number",
        message: "What is the salary?",
        name: "salary"
    }, {
        type: "number",
        message: "What is the department id?",
        name: "department_id"
    }])
    .then(response => {
        db.query("insert into viewRoles (id,title,salary,department_id) values (?,?,?,?)", [response.id, response.title,response.salary, response.department_id], (err) => {
            viewRoles()
        })
    })
}
   
function showMenu() {
    inquirer.prompt(questions).then(response => {
        if (response.options === 'View All Departments') {
            viewDepartment()
        }
        if (response.options === "View All Roles") {
            viewRoles()
        }
        if (response.options === "View All Employees") {
            viewEmployee()
        }
        if (response.options === "Add a Department") {
            addDepartment()
            return;
        }
        if (response.options === "Add Employee") {
            addEmployee()
            return;
        }
        if (response.options === "Add a Role") {
            addRole()
            return;
        }
        if (response.options === "Update an Employee Role") {
            updateRole()
            return;
        }
    })
}

function viewRoles() {
    db.query('select * from role', (err, data) => {
        console.table(data)
        showMenu()
    })
}
function viewEmployee() {
    db.query('select * from employee', (err, data) => {
        console.table(data)
        showMenu()
    })
}
function viewDepartment() {
    db.query('select * from department', (err, data) => {
        console.table(data)
        showMenu()
    })
    
}


