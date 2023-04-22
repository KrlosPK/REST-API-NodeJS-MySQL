import { pool } from '../db.js'
import jwt from 'jsonwebtoken'

const verifyExistingUser = async ({ email }) => {
  const [check] = await pool.execute('SELECT email FROM users WHERE email = ?', [email])
  if (check.length !== 0) return true
  return false
}

const createToken = (payload, res) => {
  const token = jwt.sign({ data: payload }, 'secreto', { algorithm: 'HS256' })
  res.setHeader('Authorization', `${token}`)
  return res.status(200).json({ token })
}

export const registerUser = async ({ body }, res) => {
  const { name, email, password } = body
  try {
    // * Verificar si el usuario existe en la base de datos
    const userExists = await verifyExistingUser({ email })
    if (userExists) return res.status(409).json({ message: 'El usuario ya existe' })

    await pool.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password])
    res.sendStatus(200)
  } catch (error) {
    handleHTTP(res, 'Error al crear el usuario')
  }
}

export const loginUser = async ({ body }, res) => {
  const { email, password } = body
  try {
    // * Verificar si el usuario existe en la base de datos
    const [login] = await pool.query('SELECT * FROM users WHERE email = ?', [email])
    if (login.length === 0) return res.status(404).json({ message: 'El usuario no existe' })

    // * Comparar contraseña ingresada con la contraseña en la base de datos
    const dbPassword = login[0].password
    if (password !== dbPassword) return res.status(401).json({ message: 'Contraseña incorrecta' })

    createToken(login, res)
  } catch (error) {
    handleHTTP(res, 'Error al iniciar sesión')
  }
}

export const getUsers = async (_req, res) => {
  try {
    const [users] = await pool.query('SELECT * FROM users')
    res.status(200).json(users)
  } catch (error) {
    handleHTTP(res, 'Error al obtener los usuarios')
  }
}

export const getUserById = async ({ params }, res) => {
  const { id } = params
  try {
    const [user] = await pool.query('SELECT * FROM users WHERE id_user = ?', [id])
    if (user.length === 0) return res.status(404).json({ message: 'El usuario no existe' })
    res.status(200).json(user[0])
  } catch (error) {
    handleHTTP(res, 'Error al obtener el usuario')
  }
}
