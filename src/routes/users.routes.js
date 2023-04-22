import { Router } from 'express'
import { loginUser, registerUser } from '../controllers/users.controller.js'

const usersRoutes = Router()

usersRoutes.post('/login', loginUser)
usersRoutes.post('/register', registerUser)

export { usersRoutes }
