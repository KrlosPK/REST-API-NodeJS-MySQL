import express from 'express'
import { publicacionesRoutes, empleadosRoutes } from './routes/routes.js'

const app = express()
const PORT = 3001

app.use(express.json())

app.use('/api', publicacionesRoutes)
app.use('/api', empleadosRoutes)

app.listen(PORT)
