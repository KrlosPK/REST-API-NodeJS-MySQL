CREATE DATABASE IF NOT EXISTS rest_api DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE rest_api;

CREATE TABLE empleados (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(600) DEFAULT NULL,
  salario INT DEFAULT NULL
);

CREATE TABLE publicaciones (
  id_publicacion INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  descripcion_publicacion VARCHAR(600) DEFAULT NULL,
  galeria_publicacion VARCHAR(5000) DEFAULT NULL,
  fecha_creacion DATETIME DEFAULT NULL,
  fecha_modificacion DATETIME DEFAULT NULL,
  estado_publicacion VARCHAR(30) DEFAULT 'activa'
);

CREATE TABLE users (
  id_user INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);
