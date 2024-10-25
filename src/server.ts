import express from 'express';
import db from './db/index.js'
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const promptUser = async () => {
    const { action } = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'Add Department',
                'Add Role',
                'Add Employee',
                'Update Employee Role',
                'Exit'
            ]
        }
    ]);

    const dbInstance = new db();

    switch (action) {
        case 'Add Department':
            await dbInstance.addDepartment();
            break;
        case 'Add Role':
            await dbInstance.addRole();
            break;
        case 'Add Employee':
            await dbInstance.addEmployee();
            break;
        case 'Update Employee Role':
            await dbInstance.updateEmployeeRole();
            break;
        case 'Exit':
            console.log('Exiting...');
            process.exit();
    }

    // Prompt user again after action is completed
    promptUser();
};

// Start the prompt
promptUser();

// Default response for any other request (Not Found)
app.use((_req, res) => {
    res.status(404).end();
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
