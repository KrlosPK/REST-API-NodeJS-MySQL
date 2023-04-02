import { pool } from '../db.js'

export const getPublications = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM publicaciones WHERE estado_publicacion = "activa"')

    res.send(rows)
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener las publicaciones', error })
  }
}

export const getPublicationById = async (req, res) => {
  const { id } = req.params

  try {
    const [rows] = await pool.query('SELECT * FROM publicaciones WHERE id_publicacion = ?', [id])
    if (rows.length <= 0) return res.status(404).json({ message: 'Publicación no encontrada' })

    res.json(rows[0])
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener la publicación', error })
  }
}

export const createPublication = async (req, res) => {
  const { descripcion_publicacion, galeria_publicacion, fecha_creacion, fecha_modificacion } = req.body

  try {
    const [rows] = await pool.query(
      'INSERT INTO publicaciones (descripcion_publicacion, galeria_publicacion, fecha_creacion, fecha_modificacion, estado_publicacion) VALUES (?, ?, ?, ?, "activa")',
      [descripcion_publicacion, galeria_publicacion, fecha_creacion, fecha_modificacion]
    )
    res.send({ rows })
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear la publicación', error })
  }
}

export const updatePublication = async (req, res) => {
  const { id } = req.params
  const { descripcion_publicacion, galeria_publicacion, fecha_creacion, fecha_modificacion } = req.body

  try {
    const [result] = await pool.query(
      'UPDATE publicaciones SET descripcion_publicacion = IFNULL(?, descripcion_publicacion), galeria_publicacion = IFNULL(?, galeria_publicacion), fecha_creacion = IFNULL(?, fecha_creacion), fecha_modificacion = IFNULL(?, fecha_modificacion) WHERE id_publicacion = ?',
      [descripcion_publicacion, galeria_publicacion, fecha_creacion, fecha_modificacion, id]
    )
    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: 'Publicación no encontrada'
      })

    const [rows] = await pool.query('SELECT * FROM publicaciones WHERE id_publicacion = ?', [id])

    res.json(rows[0])
  } catch (error) {
    return res.status(500).json({ message: 'Error al actualizar la publicación', error })
  }
}

export const deletePublication = async (req, res) => {
  const { id } = req.params

  try {
    const [result] = await pool.query('DELETE FROM publicaciones WHERE id_publicacion = ?', [id])
    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: 'Publicación no encontrada'
      })

    res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({ message: 'Error al eliminar la publicación', error })
  }
}
