
INSERT INTO department (name)
VALUES ( "Developers" ),
       ( "Custodial" ),
       ( "Managerial"),
       ( "Marketing"),
       ( "Human Resources");

INSERT INTO role (title, salary, department_id)
VALUES ( "Manager", 70000, 1),
       ( "Juinor Developer", 60000, 1),
       ( "Janitor", 35000, 2),
       ( "Senior Developer", 85000, 1),
       ( "CEO", 150000, 3);



INSERT INTO employee (firstName, lastName,role_id) 
VALUES ("Noel", "Stafford", 1),
("Mateo", "Wallace", 4),
("Mark", "Elliot", 2),
 ("Seth", "Wooten",2),
 ("JW", "Dinsmore", 3),
 ("Andrew", "Gibbs", 1),
 ("Ross", "Mcvey", 4),
 ("Jordan", "Colubiale", 3);