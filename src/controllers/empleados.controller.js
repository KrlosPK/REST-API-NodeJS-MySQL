import { pool } from '../db.js'

export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM empleados')

    res.json(rows)
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener los empleados', error })
  }
}

export const getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params

    const [rows] = await pool.query('SELECT * FROM empleados WHERE id = ?', [id])

    if (rows.length <= 0) return res.status(404).json({ message: 'Empleado no encontrado' })

    res.send(rows[0])
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener el empleado', error })
  }
}

export const createEmployee = async (req, res) => {
  try {
    const { nombre, salario } = req.body

    const [rows] = await pool.query('INSERT INTO empleados (nombre, salario) VALUES (?, ?)', [nombre, salario])
    res.send({ rows })
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear el empleado', error })
  }
}

export const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params
    const { nombre, salario } = req.body

    const [result] = await pool.query('UPDATE empleados SET nombre = IFNULL(?, nombre), salario = IFNULL(?, salario) WHERE id = ?', [
      nombre,
      salario,
      id
    ])

    if (result.affectedRows <= 0) return res.status(404).json({ message: 'Empleado no encontrado' })

    const [rows] = await pool.query('SELECT * FROM empleados WHERE id = ?', [id])

    res.json(rows[0])
  } catch (error) {
    return res.status(500).json({ message: 'Error al actualizar el empleado', error })
  }
}

export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params

    const [result] = await pool.query('DELETE FROM empleados WHERE id = ?', [id])

    if (result.affectedRows <= 0) return res.status(404).json({ message: 'Empleado no encontrado' })

    res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({ message: 'Error al eliminar el empleado', error })
  }
}
