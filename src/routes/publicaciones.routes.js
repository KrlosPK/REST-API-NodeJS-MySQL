import { Router } from 'express'
import {
  getPublicaciones,
  createPublicacion,
  putPublicacion,
  deletePublicacion
} from '../controllers/publicaciones.controller.js'

const router = Router()

router.get('/publicaciones', getPublicaciones)

router.post('/publicaciones', createPublicacion)

router.put('/publicaciones', putPublicacion)

router.delete('/publicaciones', deletePublicacion)

export { router }
