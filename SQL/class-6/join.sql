create database studentdb;
use studentdb;
drop database studentdb;
create table courses(
courseid int primary key auto_increment,
coursename varchar(10)
);
insert into courses (coursename) values ("mern"),("aws"),("java"),("python");

create table trainer(
trainerid int primary key auto_increment,
trainername varchar(10)
);
insert into trainer (trainername) values ("varun"),("arun"),("tharun"),("mega");
CREATE table student(
studentnid int primary key auto_increment,
studentnam varchar(10)
);
insert into student (studentnam) values ("kavya"),("maran"),("pavi"),("nivi");

create table enroll(
enrollid int primary key auto_increment,
cid int,
tid int,
sid int,
foreign key (cid) references courses(courseid),
foreign key (tid) references trainer(trainerid),
foreign key (sid) references student(studentnid)
);
insert into enroll (cid,tid,sid) values (1,2,2),(2,4,3),(3,1,2);
select c.coursename, s.studentnam, t.trainername from enroll as e inner join courses as c  on e.cid=c.courseid inner join trainer as t on e.tid = t.trainerid inner join student as s on s.studentnid=e.sid;