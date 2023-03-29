import express from 'express'
import { router as publicacionesRouter } from './routes/publicaciones.routes.js'
import { router as indexRouter } from './routes/index.routes.js'

const app = express()

app.listen(3000)

app.use(publicacionesRouter)
app.use(indexRouter)
