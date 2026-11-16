create database hospital;
use hospital;
create table patients(
p_id int ,
patientname varchar(20),
patientage int ,
prblm varchar(30), 
primary key (p_id)
);
insert into patients value(1,"arun",62,"TB"),(2,"varun",62,"fever"),(3,"tharun",62,"bone fracture");
drop database hospital ;
create table staffs(
s_id int ,
staffname varchar(20),
department varchar(30),
primary key (s_id,department)
);
insert into staffs values(1,"prabhu","General"),(2,"kavin","General"),(3,"mathu","emergency");

create table department(
d_id int ,
depname varchar(30),
prblm varchar(20),
primary key (d_id,prblm)
);
insert into department values(1,"General","fever"),(2,"emergency","bone fracture"),(3,"General","TB");

create table payment(
pay_id int primary key ,
paymentStatus varchar(20),
payamt int,
paymentType varchar(10)

);
insert into payment values(1,'paid',1500,'cash'),(2,'paid',5500,'cash'),(3,'not paid',56000,'UPI');

create table details(
detail_id int,
p_id int,
s_id int,
d_id int,
pay_id int,
primary key(p_id,s_id,d_id,pay_id),
foreign key (p_id) references patients(p_id),
foreign key (s_id) references staffs(s_id),
foreign key (d_id) references department(d_id),
foreign key (pay_id) references payment(pay_id)
);
insert into details values(1,3,3,2,3);
select * from details as d inner join patients as p inner join staffs as s inner 
join department as dep inner join payment as pay on d.s_id=s.s_id and d.pay_id=pay.pay_id;