## Employee Management System
A command-line application to manage employee data, including departments, roles, and employees. This application allows users to view, add, and update information about departments, roles, and employees.

## Features
View all departments
View all roles
View all employees
Add a department
Add a role
Add an employee
Update an employee's role

## Prerequisites
Node.js (version 14 or higher)
PostgreSQL database

## Installation
1 - Clone the repository:
git clone "https://github.com/Liciaav/CMS-project"
cd employee-management-system

2 - Install dependencies:
npm install

3 - Set up the PostgreSQL database:
On Command Line or Terminal:
- Run packge.pg.
psql -U yourusername postgres
- Create a new database.
CREATE DATABASE employee_db;
- Connect to Database.
\c employee_db;
- Run the schema.sql file to create the necessary tables.
\i schema.sql
- Run the Seeds the database with initial data.
\i seeds.sql

## Usage
To start the application, run:
node index.js
Follow the prompts in the command line to interact with the application.

## Walkthrough video

## License
This project is licensed under the MIT License.

## Acknowledgements
Node.js
PostgreSQL
Inquirer for command-line prompts
