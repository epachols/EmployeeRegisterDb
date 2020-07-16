USE employee_db;

INSERT INTO department (department)
VALUES ("Sales"),("Marketing"),("Legal"),("Engineering");

INSERT INTO role (title, salary, department_id)
VALUES 
("Sales Lead", 90000, 1), 
("Sales Team", 70000, 1),
("Marketing Lead", 100000, 2), 
("Market Research", 40000, 2),
("Legal Supervisor", 180000, 3),
("Legal Team", 110000, 3),
("Legal Intern", 40000, 3),
("Lead Engineer", 140000, 4),
("Senior Engineer", 130000, 4),
("Junior Engineer", 110000, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES 

("Jim","Jones", 1), 
("Tracy","Montloe", 2), 
("Jennifer","Connelly", 2),

("Erica","Caldwell", 3),
("Tim","Fredericks", 4),
("Jan","Jayse", 5),

("Ace","Fritz", 6),
("Champ","Fritz", 6),
("Mikey","Donnelly", 7),

("Dill","pickles", 10),
("Tommy","pickles", 8),
("Angelica","pickles", 9);

