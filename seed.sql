USE employee_db;

INSERT INTO department (name)
VALUES ("fish"),("chips"),("sweets");

INSERT INTO role (title, salary, department_id)
VALUES ("lead", 70000, 1), 
("day", 40000, 1),
("fishypro", 70000, 2), 
("fishyjr", 40000, 2),
("candyman", 130000, 3);

INSERT INTO role (first_name, last_name, role_id, manager_id)
VALUES 
("Jim","Jones", 1), -- this should make jim jones a Lead in the fish dept.
("tracy","montloe", 2), -- should make tracy a day in fish dpt.
("mr","bubbles", 5)

-- functional seed