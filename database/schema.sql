SET lc_time_names = 'pt_BR';
USE docker_database;

DROP TABLE IF exists users;
CREATE TABLE users (
    id INT PRIMARY KEY NOT NULL auto_increment,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(254) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;