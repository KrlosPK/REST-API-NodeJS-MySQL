import express from 'express'
import { publicacionesRoutes, empleadosRoutes } from './routes/routes.js'

const app = express()

app.use(express.json())

app.use('/api', publicacionesRoutes)
app.use('/api', empleadosRoutes)

app.use((_req, res, _next) => {
  res.status(404).json({ message: 'Not found' })
})

export { app }
