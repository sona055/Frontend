create database employee_dbemployee_db;
use employee_db;
create table employees   (
id int  primary key auto_increment,
name varchar(10) not null,
department varchar(7) not null,
salary int ,
age int,
city varchar(20) not null
);
insert into employees (name,department,salary,age,city) values('arun','IT',34000,32,'chennai'),('varun','HR',54000,38,'covai'),('tharun','IT',56000,22,'chennai'),
('vani','sales',25000,27,'trichy'),('rani','IT',29000,31,'madurai'); 
select * from employees where salary >30000 and department='IT'

-- task-2
create table students  (
 id int  primary key auto_increment,
name varchar(10) not null,
age int,
city varchar(20) not null
);
insert into students  (name,age,city) values('arun',18,'chennai'),('varun',20,'covai'),('tharun',22,'chennai'),
('vani',27,'trichy'),('rani',31,'madurai'); 
select * from students where age between 18 and 25 and (city='chennai'or city='madurai');
-- task-3
select department, count(*) from employees group by department;
 -- Task-5
 select department, avg(salary) from employees where salary >25000  group by department having avg(salary) > 40000;
select department, avg(salary) from employees group by department;