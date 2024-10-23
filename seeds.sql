INSERT INTO departament (name), VALUES (
('Human Resources'),
('Finance'),
('IT');
);

INSERT INTO role ( title, departament_id, salary), VALUES (
('HR Manager', 1, 80000),
('Recruiter', 1, 60000),
('Financial Analyst', 2, 70000),
('Accountant', 2, 65000),
('Software Developer', 3, 90000);
);

INSERT INTO employee (first_name, last_name, job_title, departament, salary, manager), VALUES(
('Alice', 'Smith', 'HR Manager', 'Human Resources', 80000, NULL),
('Bob', 'Johnson', 'Recruiter', 'Human Resources', 60000, 1),
('Charlie', 'Williams', 'Financial Analyst', 'Finance', 70000, NULL),
('David', 'Brown', 'Accountant', 'Finance', 65000, 3),
('Eve', 'Davis', 'Software Developer', 'IT', 90000, NULL),
('Frank', 'Garcia', 'HR Assistant', 'Human Resources', 50000, 1),
('Grace', 'Martinez', 'Junior Developer', 'IT', 75000, 5),
('Hannah', 'Rodriguez', 'Finance Intern', 'Finance', 40000, 3),
('Ian', 'Wilson', 'IT Support', 'IT', 55000, 5),
('Jack', 'Lee', 'Senior Accountant', 'Finance', 85000, 4);
);

