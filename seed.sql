drop database if exists employeeCMS_DB;
create database employeeCMS_DB;
use employeeCMS_DB;

create table Departments (
 id INT NOT NULL AUTO_INCREMENT,
 department_name varchar (20) ,
 primary key (id)
 );
 
 insert into Departments (department_name)
 values ( "engineering");
 
 
 create table Employees (
 id INT NOT NULL AUTO_INCREMENT,
 first_name varchar (20) ,
 last_name varchar (20) ,
 role_id int ,
 manager_id int,
 primary key (id)
 );
 
  insert into Employees (first_name,last_name,manager_id)
 values ("Ian" , "Pyeatt", 1);
  create table employee_role (
  id int not null auto_increment,
  title varchar (30),
  salary decimal,
  departmentId int ,
  primary key(id));
  
    insert into employee_role (title, salary)
 values ("Full Stack Developer" , 100000.00);


-- joinning the id of the department from the employee_role and department Tables
 use employeeCMS_DB;



select departments.id from employee_role
inner join departments on employee_role.departmentId = departments.ID