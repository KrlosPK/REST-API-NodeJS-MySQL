import { Router } from 'express'
import { onPing } from '../controllers/index.controller.js'

const router = Router()

router.get('/ping', onPing)

export { router }
