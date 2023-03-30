import { pool } from '../db.js'

export const getPublications = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM publicaciones WHERE estado_publicacion = "activa"')

  res.send(rows)
}

export const getPublicationById = async (req, res) => {
  const { id } = req.params

  const [rows] = await pool.query('SELECT * FROM publicaciones WHERE id_publicacion = ?', [id])
  if (rows.length <= 0) return res.status(404).json({ message: 'Publicación no encontrada' })

  res.json(rows[0])
}

export const createPublication = async (req, res) => {
  const { descripcion_publicacion, galeria_publicacion, fecha_creacion, fecha_modificacion } = req.body

  const [rows] = await pool.query(
    'INSERT INTO publicaciones (descripcion_publicacion, galeria_publicacion, fecha_creacion, fecha_modificacion, estado_publicacion) VALUES (?, ?, ?, ?, "activa")',
    [descripcion_publicacion, galeria_publicacion, fecha_creacion, fecha_modificacion]
  )
  res.send({ rows })
}

export const patchPublication = async (req, res) => {
  const { id } = req.params
  const { descripcion_publicacion, galeria_publicacion, fecha_creacion, fecha_modificacion } = req.body

  const [result] = await pool.query(
    'UPDATE publicaciones SET descripcion_publicacion = ?, galeria_publicacion = ?, fecha_creacion = ?, fecha_modificacion = ? WHERE id_publicacion = ?',
    [descripcion_publicacion, galeria_publicacion, fecha_creacion, fecha_modificacion, id],
    [descripcion_publicacion, galeria_publicacion, fecha_creacion, fecha_modificacion]
  )
  if (result.affectedRows <= 0)
    return res.status(404).json({
      message: 'Publicación no encontrada'
    })

  res.sendStatus(204)
}

export const deletePublication = async (req, res) => {
  const { id } = req.params

  const [result] = await pool.query('DELETE FROM publicaciones WHERE id_publicacion = ?', [id])
  if (result.affectedRows <= 0)
    return res.status(404).json({
      message: 'Publicación no encontrada'
    })

  res.sendStatus(204)
}
