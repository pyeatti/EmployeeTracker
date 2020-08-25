drop database if exists employeeCMS_db;

create database employeeCMS_db;

use employeeCMS_db;

create table department (
    id INT AUTO_INCREMENT,
    name VARCHAR(30),
    primary key (id)
);

CREATE TABLE role (
    id INT AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    primary key (id),
    
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    primary key (id),
    
); 