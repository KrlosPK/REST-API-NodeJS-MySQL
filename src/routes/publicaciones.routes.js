import { Router } from 'express'
import {
  getPublications,
  getPublicationById,
  createPublication,
  patchPublication,
  deletePublication
} from '../controllers/publicaciones.controller.js'

const publicacionesRoutes = Router()

// ? GET
publicacionesRoutes.get('/publicaciones', getPublications)
publicacionesRoutes.get('/publicaciones/:id', getPublicationById)

// ? POST
publicacionesRoutes.post('/crearPublicacion', createPublication)

// ? PATCH
publicacionesRoutes.patch('/editarPublicacion/:id', patchPublication)

// ? DELETE
publicacionesRoutes.delete('/eliminarPublicacion/:id', deletePublication)

export { publicacionesRoutes }
