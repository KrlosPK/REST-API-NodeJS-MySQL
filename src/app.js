import express from 'express'
import { publicacionesRoutes, empleadosRoutes, usersRoutes } from './routes/routes.js'

const app = express()

app.use(express.json())

app.use('/api', publicacionesRoutes)
app.use('/api', empleadosRoutes)
app.use('/api', usersRoutes)

app.use((_req, res, _next) => {
  res.status(404).json({ message: 'Not found' })
})

export { app }
