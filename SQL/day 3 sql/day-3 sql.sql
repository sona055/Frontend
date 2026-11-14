create database college_db;
use college_db;
-- task-1
create table students(
ID int primary key auto_increment,
studentsname varchar(20) not null , 
studentsage int check(studentsage>=18) ,
 studentsemail varchar(30) unique,
 studentscourse varchar(20) default "FullStack",
 studentsfees int(10),
 admissiondate date default '2026-7-21'
);
rename table students to student_details ;
alter table student_details add mobile_number int after studentsage; 

-- task-2
create table employees(
id int primary key auto_increment,
name varchar(10) not null,
salary int(15),
department varchar(20) not null,
joiningdate date,
city varchar(10) 
);
alter table employees rename column name to employee_name;
alter table employees modify salary decimal;
alter table employees add email varchar(20);

-- task-3
create table products (
productID int unique,
productname varchar(10) not null,
-- once you add the constrain name then modify using this name else check the automatic provided by sql for modifying
productprice int(10)  constraint productprice check(productprice<=1000000),
productcategory varchar(15),
productstock varchar(14) default "yes",
manufacturing date
);
rename table products to product_details;
ALTER TABLE product_details DROP CHECK product_details_chk_1;
alter table product_details rename column productprice to product_price; 
alter table product_details add constraint product_details_chk_1 check(product_price<=1000000);

-- Task-4
create table patients (
patientID int primary key auto_increment,
patientname varchar(10) not null,
age int,
gender varchar(20),
disease varchar(30) not null,
admissiondate date,
doctorname varchar(20) not null
); 
alter table patients change disease diagnosis varchar(30);
alter table patients modify patientname  varchar(150);
rename table patients to patient_records;


-- Task-5
create table courses (
courseID int primary key auto_increment,
coursename varchar(20) not null,
duration varchar(10),
fees int,
trainername varchar(10) not null,
startdate date
);  
alter table courses modify duration varchar(10) default '3';
alter table courses add course_status varchar(20) ;
alter table courses drop startdate;

-- Task-7
create table staff (
staffID int primary key auto_increment,
name varchar(10) not null,
department varchar(20),
salary int check(salary>=0),
city varchar(10) default "chennai"
);
set safe_mode=0;
select * from staff;
insert into staff(name,department,salary) values('arun','IT',34000),
('sona','IT',67000),('kavin','IT',54000),
('megavan','IT',51000),('swathi','sales',74000),
('vani','IT',34000),('arun','IT',34000);
update staff  set salary = 45000 where staffID=3;
update staff set salary=salary+5000 where department ='IT';
update staff set city='covai' where salary >50000;
set sql_safe_updates=1;

-- Task-9
create database library_db ;
use library_db;
create table books (
ID int primary key auto_increment,
bookname varchar(20) not null,
author varchar(20) default"admin",
price int ,
publishedDate  datetime default now()
);
select*from books;
insert into books(bookname,price)values('alchemist',200),('secret',350),
('ikigai',190),('thirukkural',400),('velpari',600);
truncate table books;

create database company_db ;
use company_db ;
create table departments(
id int primary key auto_increment,
name varchar(10) not null
);
insert into departments(name) values('kavin'),('anvi'),('arun'),('abi');
