import { Router } from 'express'
import { loginUser, registerUser, getUsers, getUserById } from '../controllers/users.controller.js'

const usersRoutes = Router()

empleadosRoutes.get('/users', getUsers)
empleadosRoutes.get('/users/:id', getUserById)

usersRoutes.post('/login', loginUser)
usersRoutes.post('/register', registerUser)

export { usersRoutes }
