
CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

CREATE TABLE IF NOT EXISTS burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
