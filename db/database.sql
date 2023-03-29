CREATE DATABASE IF NOT EXISTS `poto-db` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE `poto-db`;

CREATE TABLE publicaciones (
  id_publicacion INT(11) NOT NULL,
  descripcion_publicacion VARCHAR(600) DEFAULT NULL,
  galeria_publicacion VARCHAR(5000) DEFAULT NULL,
  fecha_creacion DATETIME DEFAULT NULL,
  fecha_modificacion DATETIME DEFAULT NULL,
  estado_publicacion VARCHAR(30) DEFAULT 'activo'
);

SELECT 1 + 1;