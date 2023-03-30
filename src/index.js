import express from 'express'
import { publicacionesRoutes } from './routes/publicaciones.routes.js'

const app = express()
const PORT = 3001

app.use(express.json())

app.use('/api', publicacionesRoutes)

app.listen(PORT)
