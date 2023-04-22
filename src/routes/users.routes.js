import { Router } from 'express'
import { loginUser, registerUser, getUsers, getUserById } from '../controllers/users.controller.js'

const usersRoutes = Router()

usersRoutes.get('/users', getUsers)
usersRoutes.get('/users/:id', getUserById)

usersRoutes.post('/login', loginUser)
usersRoutes.post('/register', registerUser)

export { usersRoutes }
