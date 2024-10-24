INSERT INTO department (name) 
VALUES 
('Human Resources'),
('Finance'),
('IT');


SELECT * FROM department;


INSERT INTO role (title, salary, department_id) 
VALUES 
('HR Manager', 80000, 1),
('Recruiter', 60000, 1),
('Financial Analyst', 70000, 2),
('Accountant', 65000, 2),
('Software Developer', 90000, 3),
('IT Support Specialist', 50000, 3);


SELECT * FROM role;

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES 
('Alice', 'Smith', 1, NULL),
('Bob', 'Johnson', 2, 1),
('Charlie', 'Williams', 3, NULL),
('David', 'Brown', 4, 3),
('Eve', 'Davis', 5, NULL),
('Frank', 'Garcia', 6, 1),
('Grace', 'Martinez', 5, 5),
('Hannah', 'Rodriguez', 3, 4),
('Ian', 'Wilson', 6, 5),
('Jack', 'Lee', 4, 4);


SELECT * FROM employee;


