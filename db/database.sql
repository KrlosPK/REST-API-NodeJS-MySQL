CREATE DATABASE IF NOT EXISTS rest_api DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE rest_api;

CREATE TABLE publicaciones (
  id_publicacion INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  descripcion_publicacion VARCHAR(600) DEFAULT NULL,
  galeria_publicacion VARCHAR(5000) DEFAULT NULL,
  fecha_creacion DATETIME DEFAULT NULL,
  fecha_modificacion DATETIME DEFAULT NULL,
  estado_publicacion VARCHAR(30) DEFAULT 'activa'
);
