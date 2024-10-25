import { pool, connectToDb } from './connectio.js';
import inquirer from 'inquirer';
await connectToDb();
// add a department
async function addDepartment() {
    const { departmentName } = await inquirer.prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: 'Enter the name of the department:'
        }
    ]);
    await pool.query('INSERT INTO department (name) VALUES ($1)', [departmentName]);
    console.log(`Department "${departmentName}" added successfully.`);
}
;
//add a role
async function addRole() {
    const { roleTitle, salary, departmentId } = await inquirer.prompt([
        {
            type: 'input',
            name: 'roleTitle',
            message: 'Enter the role title:'
        },
        {
            type: 'number',
            name: 'salary',
            message: 'Enter the salary for the role:'
        },
        {
            type: 'number',
            name: 'departmentId',
            message: 'Enter the department ID for this role:'
        }
    ]);
    await pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [roleTitle, salary, departmentId]);
    console.log(`Role "${roleTitle}" added successfully.`);
}
//add a employee
async function addEmployee() {
    const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: "Enter the employee's first name:"
        },
        {
            type: 'input',
            name: 'lastName',
            message: "Enter the employee's last name:"
        },
        {
            type: 'number',
            name: 'roleId',
            message: "Enter the employee's role ID:"
        },
        {
            type: 'number',
            name: 'managerId',
            message: "Enter the employee's manager ID (or leave blank if none):",
            default: null
        }
    ]);
    await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [firstName, lastName, roleId, managerId]);
    console.log(`Employee "${firstName} ${lastName}" added successfully.`);
}
// update employee role
async function updateEmployeeRole() {
    const employees = await pool.query('SELECT id, first_name, last_name FROM employee');
    const employeeChoices = employees.rows.map(emp => ({
        name: `${emp.first_name} ${emp.last_name}`,
        value: emp.id
    }));
    const { employeeId, newRoleId } = await inquirer.prompt([
        {
            type: 'list',
            name: 'employeeId',
            message: 'Select an employee to update:',
            choices: employeeChoices
        },
        {
            type: 'number',
            name: 'newRoleId',
            message: 'Enter the new role ID for this employee:'
        }
    ]);
    await pool.query('UPDATE employee SET role_id = $1 WHERE id = $2', [newRoleId, employeeId]);
    console.log(`Employee's role updated successfully.`);
}
