import { Router } from 'express'
import { listBatallas, registerBatalla } from './controller'

const router = Router()

router.get('/', listBatallas)
router.post('/', registerBatalla)

export const batallaRoute = router
