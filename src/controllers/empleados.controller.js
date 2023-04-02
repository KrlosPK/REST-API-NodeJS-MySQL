import { pool } from '../db.js'

export const getEmployees = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM empleados')

  res.json(rows)
}

export const getEmployeeById = async (req, res) => {
  const { id } = req.params

  const [rows] = await pool.query('SELECT * FROM empleados WHERE id_empleado = ?', [id])

  if (rows.length <= 0) return res.status(404).json({ message: 'Empleado no encontrado' })

  res.send(rows[0])
}

export const createEmployee = async (req, res) => {
  const { nombre, salario } = req.body

  const [rows] = await pool.query('INSERT INTO empleados VALUES (?, ?)', [nombre, salario])

  console.log(rows)
  console.log({ rows })

  res.send({ rows })
}

export const updateEmployee = async (req, res) => {
  const { id } = req.params
  const { nombre, salario } = req.body

  const [result] = await pool.query('UPDATE empleados SET nombre = IFNULL(?, nombre), salario = IFNULL(?, salario) WHERE id_empleado = ?', [
    nombre,
    salario,
    id
  ])

  if (result.affectedRows <= 0) return res.status(404).json({ message: 'Empleado no encontrado' })

  res.sendStatus(204)
}

export const deleteEmployee = async (req, res) => {
  const { id } = req.params

  const [result] = await pool.query('DELETE FROM empleados WHERE id_empleado = ?', [id])

  if (result.affectedRows <= 0) return res.status(404).json({ message: 'Empleado no encontrado' })

  res.sendStatus(204)
}
