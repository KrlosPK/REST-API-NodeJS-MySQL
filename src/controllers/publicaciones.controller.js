import { pool } from '../db.js'

export const getPublications = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM publicaciones WHERE estado_publicacion = "activa"')
  res.send(rows)
}

export const getPublicationById = async (req, res) => {
  const { id } = req.params

  const [rows] = await pool.query('SELECT * FROM publicaciones WHERE id_publicacion = ?', [id])
  res.send(rows)
}

export const createPublication = async (req, res) => {
  const { descripcion_publicacion, galeria_publicacion, fecha_creacion, fecha_modificacion } = req.body

  const [rows] = await pool.query(
    'INSERT INTO publicaciones (descripcion_publicacion, galeria_publicacion, fecha_creacion, fecha_modificacion, estado_publicacion) VALUES (?, ?, ?, ?, "activa")',
    [descripcion_publicacion, galeria_publicacion, fecha_creacion, fecha_modificacion]
  )
  res.send({ rows })
}

export const patchPublication = (req, res) => res.send('editando publicaciones')

export const deletePublication = (req, res) => res.send('eliminando publicaciones')
