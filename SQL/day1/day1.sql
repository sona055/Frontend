create database warehouse_product;
use warehouse_product;
create table warehouse (
id int primary key auto_increment,
warehouse_name varchar (25) not null,
warehouse_portnum int unique,
warehouse_location varchar(25),
warehouse_price int not null,
warehiuse_area varchar(25),
warehouse_isactive boolean,
warehouse_createdate date,
warehouse_createdby varchar(25) default "Admin",
warehouse_updatedat date,
warehouse_updatedby varchar(25)
);
use warehouse_product;
create table product (
id int primary key auto_increment,
product_name varchar (25) not null,
product_quality varchar(25),
product_price int not null,
product_Barcode int unique,
product_category varchar(25),
product_isactive boolean,
product_createdate date,
product_createdby varchar(25) default "Admin",
product_updatedat date,
product_updatedby varchar(25)
);
use warehouse_product;
create table products(
product_id INT PRIMARY KEY AUTO_INCREMENT,
product_name VARCHAR(150) NOT NULL,
product_code VARCHAR(30) UNIQUE,
category VARCHAR(50) noT NULL,
price DECIMAL(10,2) CHECK (price > 0),
stock  INT DEFAULT 0,
brand vARCHAR(50) DEFAULT 'Generic',
manufacture_date DATE,
expiry_date DATE,
is_available BOOLEAN DEFAULT TRUE,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);